package org.example.anroid.flickrbrowser;

import android.net.Uri;

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
                .appendQueryParameter(NO_JSON_CALLBACK_PARAM, "1").build();
        return mDestinationURI != null;
    }

    public class DownloadJsonData extends DownloadRawData {

    }
}
