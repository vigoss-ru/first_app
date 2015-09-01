package com.example.top10downloader;

import java.io.StringReader;
import java.util.ArrayList;
import java.util.List;

import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserFactory;

import android.util.Log;

public class ParseApplications {

	private String data;
	
	private List<Application> applications;
	
	public ParseApplications(String xmlData) {
		data = xmlData;
		applications = new ArrayList<Application>();
	}

	public List<Application> getApplications() {
		return applications;
	}
	
	public boolean process() {
		boolean operatorStatus = true;
		Application currentRecord = null;
		boolean isEntry = false;
		String textValue = "";
		try {
			
			XmlPullParserFactory factory = XmlPullParserFactory.newInstance();
			factory.setNamespaceAware(true);
			XmlPullParser xpp = factory.newPullParser();
			xpp.setInput(new StringReader(this.data));
			int eventType = xpp.getEventType();
			while(eventType != XmlPullParser.END_DOCUMENT) {
				String tagName = xpp.getName();
				
				if(eventType == XmlPullParser.START_TAG) {
					if(tagName.equalsIgnoreCase("entry")) {
						isEntry = true;
						currentRecord = new Application();
					}
					
				} else if(eventType == XmlPullParser.TEXT) {
					textValue = xpp.getText();
				} else if(eventType == XmlPullParser.END_TAG) {
					if(isEntry) {
						if(tagName.equalsIgnoreCase("entry")) {
							applications.add(currentRecord);
						}
						if(tagName.equalsIgnoreCase("name")) {
							currentRecord.setName(textValue);
						} else if (tagName.equalsIgnoreCase("artist")) {
							currentRecord.setArtist(textValue);
						} else if (tagName.equalsIgnoreCase("releaseDate")) {
							currentRecord.setReleaseDate(textValue);
						}
					}
				}
				
				for(Application app : applications) {
					Log.d("LOG", "***********");
					Log.d("LOG", app.getName());
					Log.d("LOG", app.getArtist());
					Log.d("LOG", app.getReleaseDate());
				}
				
				eventType = xpp.next();
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			operatorStatus = false;
		}
		return operatorStatus;
	}
		
}
