jQuery("#simulation")
  .on("mouseenter dragenter", ".s-bd4edc61-f5ea-4a94-821a-dbf1cae8e7ed .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bd4edc61-f5ea-4a94-821a-dbf1cae8e7ed #s-Text_7": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "OpenSans-Regular,Arial"
                      }
                    }
                  },{
                    "#s-bd4edc61-f5ea-4a94-821a-dbf1cae8e7ed #s-Text_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-bd4edc61-f5ea-4a94-821a-dbf1cae8e7ed #s-Text_7 span": {
                      "attributes": {
                        "color": "#5A5A5A",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "OpenSans-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_71") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bd4edc61-f5ea-4a94-821a-dbf1cae8e7ed #s-Text_71": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "OpenSans-Regular,Arial"
                      }
                    }
                  },{
                    "#s-bd4edc61-f5ea-4a94-821a-dbf1cae8e7ed #s-Text_71 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-bd4edc61-f5ea-4a94-821a-dbf1cae8e7ed #s-Text_71 span": {
                      "attributes": {
                        "color": "#5A5A5A",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "OpenSans-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-bd4edc61-f5ea-4a94-821a-dbf1cae8e7ed .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_71")) {
      jEvent.undoCases(jFirer);
    }
  });