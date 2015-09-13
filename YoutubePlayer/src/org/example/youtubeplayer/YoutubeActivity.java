package org.example.youtubeplayer;

import android.os.Bundle;
import android.widget.Toast;

import com.google.android.youtube.player.YouTubeBaseActivity;
import com.google.android.youtube.player.YouTubeInitializationResult;
import com.google.android.youtube.player.YouTubePlayer;
import com.google.android.youtube.player.YouTubePlayer.ErrorReason;
import com.google.android.youtube.player.YouTubePlayer.PlaybackEventListener;
import com.google.android.youtube.player.YouTubePlayer.PlayerStateChangeListener;
import com.google.android.youtube.player.YouTubePlayer.Provider;
import com.google.android.youtube.player.YouTubePlayerView;

public class YoutubeActivity extends YouTubeBaseActivity implements YouTubePlayer.OnInitializedListener {

	public static final String GOOGLE_API_KEY = "AIzaSyA5omd9sMmlBwX0tpKLE_faxYgg61TzT3M";
	
	public static final String YOUTUBE_VIDEO_ID = "benjwkJ6Z6c";
	
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.youtube);
		YouTubePlayerView youtubePlayerView = (YouTubePlayerView) findViewById(R.id.youtube_player);
		youtubePlayerView.initialize(GOOGLE_API_KEY, this);
	}
	
	public void onInitializationFailure(Provider provider, YouTubeInitializationResult result) {
		Toast.makeText(this, "Cannot initialize Youtube player", Toast.LENGTH_LONG).show();
	}
	
	public void onInitializationSuccess(Provider provider, YouTubePlayer player, boolean wasRestored) {
		player.setPlayerStateChangeListener(playerStateChangeListener);
		player.setPlaybackEventListener(playbackEventListener);
		
		if(!wasRestored) {
			player.cueVideo(YOUTUBE_VIDEO_ID);
		}
	}
	
	private PlaybackEventListener playbackEventListener = new PlaybackEventListener() {

		@Override
		public void onBuffering(boolean arg0) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void onPaused() {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void onPlaying() {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void onSeekTo(int arg0) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void onStopped() {
			// TODO Auto-generated method stub
			
		}
				
	};
	
	private PlayerStateChangeListener playerStateChangeListener = new PlayerStateChangeListener() {
		
		@Override
		public void onVideoStarted() {
			// TODO Auto-generated method stub
			
		}
		
		@Override
		public void onVideoEnded() {
			// TODO Auto-generated method stub
			
		}
		
		@Override
		public void onLoading() {
			// TODO Auto-generated method stub
			
		}
		
		@Override
		public void onLoaded(String arg0) {
			// TODO Auto-generated method stub
			
		}
		
		@Override
		public void onError(ErrorReason arg0) {
			// TODO Auto-generated method stub
			
		}
		
		@Override
		public void onAdStarted() {
			// TODO Auto-generated method stub
			
		}
	};
	
}
