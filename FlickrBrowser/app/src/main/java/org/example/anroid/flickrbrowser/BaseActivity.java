package org.example.anroid.flickrbrowser;

import android.support.v7.app.ActionBarActivity;
import android.support.v7.widget.Toolbar;


/**
 * Created by hong.quang on 18.11.2015.
 */
public class BaseActivity extends ActionBarActivity {

    private Toolbar mToolbar;
    public static String FLICKR_QUERY = "FLICKR_QUERY";
    public static final  String PHOTO_TRANSFER = "PHOTO_TRANSFER";

    protected Toolbar activateToolbar() {
        if(mToolbar == null) {
            mToolbar = (Toolbar)findViewById(R.id.app_bar);
            if(mToolbar != null) {
                setSupportActionBar(mToolbar);
            }
        }
        return mToolbar;
    }

    protected Toolbar activateToolbarWithHomeEnabled() {
        activateToolbar();
        if(mToolbar != null) {
            getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        }
        return mToolbar;
    }

}