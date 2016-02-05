jQuery("#simulation")
  .on("click", ".s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ null,{
                  "datatype": "property",
                  "target": "#s-Input_15",
                  "property": "jimGetValue"
                } ]
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "ContactInfo",
                    "fields": {
                      "title": {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetSelectedValue"
                      },
                      "name": {
                        "datatype": "property",
                        "target": "#s-Input_12",
                        "property": "jimGetValue"
                      },
                      "lastname": {
                        "datatype": "property",
                        "target": "#s-Input_13",
                        "property": "jimGetValue"
                      },
                      "email": {
                        "datatype": "property",
                        "target": "#s-Input_14",
                        "property": "jimGetValue"
                      },
                      "password": null
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "Addresses",
                    "fields": {
                      "type": "billing",
                      "mainDel": "true",
                      "mainBill": null,
                      "title": {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetSelectedValue"
                      },
                      "name": {
                        "datatype": "property",
                        "target": "#s-Input_12",
                        "property": "jimGetValue"
                      },
                      "lastname": {
                        "datatype": "property",
                        "target": "#s-Input_13",
                        "property": "jimGetValue"
                      },
                      "street": null,
                      "houseNr.": null,
                      "afix": null,
                      "zip": null,
                      "city": null,
                      "country": "Germany",
                      "addressName": null,
                      "email": {
                        "datatype": "property",
                        "target": "#s-Input_14",
                        "property": "jimGetValue"
                      },
                      "completeName": null,
                      "ID": null
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "name",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_12",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "lastname",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_13",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "email",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_14",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "title",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_2",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "nameComplete",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "title"
                            }," " ]
                          },{
                            "datatype": "variable",
                            "element": "name"
                          } ]
                        }," " ]
                      },{
                        "datatype": "variable",
                        "element": "lastname"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "email",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_14",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "typeOfCheckout",
                    "value": "register"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c318d934-126e-457b-9afb-e9f59fcf7a05"
                  },
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("keyup.jim", ".s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_13"
                  },
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
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_14"
                  },
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
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_14")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_15"
                  },
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
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("focusin", ".s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f #s-Input_12": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
                        "border-radius": "0px 0px 0px 0px"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f #s-Input_13": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
                        "border-radius": "0px 0px 0px 0px"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f #s-Input_14": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
                        "border-radius": "0px 0px 0px 0px"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f #s-Input_15": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f #s-Input_15 INPUT": {
                      "attributes-ie8lte": {
                        "font-family": "Arial"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f #s-Input_2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#699CFC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#699CFC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#699CFC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#699CFC",
                        "border-radius": "0px 0px 0px 0px"
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f #s-Input_12": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
                        "border-radius": "0px 0px 0px 0px"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f #s-Input_13": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
                        "border-radius": "0px 0px 0px 0px"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f #s-Input_14": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
                        "border-radius": "0px 0px 0px 0px"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f #s-Input_15": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f #s-Input_15 INPUT": {
                      "attributes-ie8lte": {
                        "font-family": "Arial"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f #s-Input_2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#B6B7B7",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#B6B7B7",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#B6B7B7",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#B6B7B7",
                        "border-radius": "0px 0px 0px 0px"
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f #s-Button_7": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f #s-Button_7": {
                      "attributes-ie": {
                        "-pie-background": "#9E1E14",
                        "-pie-poll": "false"
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
  .on("mouseleave dragleave", ".s-83d179c2-f87d-4512-ad0d-bcb8db23bc8f .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_7")) {
      jEvent.undoCases(jFirer);
    }
  });