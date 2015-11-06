package org.example.anroid.flickrbrowser;

import android.net.Uri;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Hong on 21.10.2015.
 */
public class GetFlickrJsonData extends GetRawData {

    private String LOG_TAG = GetFlickrJsonData.class.getSimpleName();
    private List<Photo> mPhotos;
    private Uri mDestinationURI;

    public GetFlickrJsonData(String searchCriteria, boolean matchAll) {
        super(null);
        createAndUpdateUri(searchCriteria, matchAll);
        mPhotos = new ArrayList<Photo>();
    }

    public void execute() {
        super.setmRawUrl(mDestinationURI.toString());
        DownloadJsonData downloadJsonData = new DownloadJsonData();
        Log.v(LOG_TAG, "Built URI = " + mDestinationURI.toString());
        downloadJsonData.execute(mDestinationURI.toString());
    }

    public boolean createAndUpdateUri(String searchCriteria, boolean matchAll) {
        final String FLICKR_API_BASE_URL = "https://api.flickr.com/services/feeds/photos_public.gne";
        final String TAGS_PARAM = "tags";
        final String TAGMODE_PARAM = "tagmode";
        final String FORMAT_PARAM = "format";
        final String NO_JSON_CALLBACK_PARAM = "nojsoncallback";

        mDestinationURI = Uri.parse(FLICKR_API_BASE_URL).buildUpon()
                .appendQueryParameter(TAGS_PARAM, searchCriteria)
                .appendQueryParameter(TAGMODE_PARAM, matchAll ? "ALL":"ANY")
                .appendQueryParameter(FORMAT_PARAM, "json")
                .appendQueryParameter(NO_JSON_CALLBACK_PARAM, "1").build();
        return mDestinationURI != null;
    }

    public void processResult() {
        if(getmDownloadStatus() != DownloadStatus.OK) {
            Log.e(LOG_TAG, "Error downloading raw file");
            return;
        }

        final String FLICKR_ITEMS = "items";
        final String FLICK_TITLE = "title";
        final String FLICK_MEDIA = "media";
        final String FLICK_PHOTO_URL = "m";
        final String FLICK_AUTHOR = "author";
        final String FLICK_AUTHOR_ID = "author_id";
        final String FLICK_LINK = "link";
        final String FLICK_TAGS = "tags";

        try {
            JSONObject jsonData = new JSONObject(getmData());
            JSONArray itemsArray = jsonData.getJSONArray(FLICKR_ITEMS);
            for (int i = 0; i < itemsArray.length(); i++) {
                JSONObject jsonPhoto = itemsArray.getJSONObject(i);
                String title = jsonPhoto.getString(FLICK_TITLE);
                String author = jsonPhoto.getString(FLICK_AUTHOR);
                String authorID = jsonPhoto.getString(FLICK_AUTHOR_ID);
                String link = jsonPhoto.getString(FLICK_LINK);
                String tags = jsonPhoto.getString(FLICK_TAGS);

                JSONObject jsonMedia = jsonPhoto.getJSONObject(FLICK_MEDIA);
                String photoUrl = jsonMedia.getString(FLICK_PHOTO_URL);
                Photo photoObject = new Photo(title, author, authorID, link, tags, photoUrl);

                this.mPhotos.add(photoObject);
            }

            for(Photo singlePhoto : mPhotos) {
                Log.v(LOG_TAG, singlePhoto.toString());
            }

        } catch (JSONException jsone) {
            jsone.printStackTrace();
            Log.e(LOG_TAG, "Error processing Json Data");
        }
    }

    public List<Photo> getMPhotos() {
        return mPhotos;
    }

    public class DownloadJsonData extends DownloadRawData {
        protected void onPostExecute(String webData) {
            super.onPostExecute(webData);
            processResult();
        }

        protected String doInBackground(String... params) {
            String[] par = {mDestinationURI.toString()};
            return super.doInBackground(par);
        }
    }
}
