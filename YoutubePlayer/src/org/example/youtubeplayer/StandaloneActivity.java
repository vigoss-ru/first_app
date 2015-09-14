package org.example.youtubeplayer;

import com.google.android.youtube.player.YouTubeStandalonePlayer;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class StandaloneActivity extends Activity implements View.OnClickListener {

	public static final String GOOGLE_API_KEY = "AIzaSyA5omd9sMmlBwX0tpKLE_faxYgg61TzT3M";
	
	public static final String YOUTUBE_VIDEO_ID = "benjwkJ6Z6c";
	public static final String YOUTUBE_PLAYLIST_ID = "";
	
	private Button btnPlay;
	private Button btnPlayList;
	
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.standalone);
		btnPlay = (Button) findViewById(R.id.btnStart);
		btnPlayList = (Button) findViewById(R.id.btnPlayList);
		
		btnPlay.setOnClickListener(this);
		btnPlayList.setOnClickListener(this);
	}
	
	public void onClick(View v) {
		Intent intent = null;
		if(v == btnPlay) {
			//Play single video
			intent = YouTubeStandalonePlayer.createVideoIntent(this, GOOGLE_API_KEY, YOUTUBE_VIDEO_ID);
		} else if (v == btnPlayList) {
			// Play the list
			intent = YouTubeStandalonePlayer.createPlaylistIntent(this, GOOGLE_API_KEY, YOUTUBE_PLAYLIST_ID);
		}
		
		if(intent != null) {
			startActivity(intent);
		}
		
	}
	
}


