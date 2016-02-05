jQuery("#simulation")
  .on("click", ".s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1"
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
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_6"
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
                    "variable": "loggedIn",
                    "value": "true"
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
    } else if(jFirer.is("#s-Label_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1"
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
    } else if(jFirer.is("#s-Rectangle_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-artFam",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "ArtFam",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "area"
                          },"sinks" ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_4": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_4 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_6": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_6 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_7": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_7 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Panel_8",
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "1290"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_11": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_11": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "productAreaSelected",
                    "value": "Sinks"
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_9"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_8",
                    "transition": "slidedown"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_29"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_2",
                    "value": {
                      "datatype": "variable",
                      "element": "productAreaSelected"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-artFam",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "ArtFam",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "area"
                          },"sinks" ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_4": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_4 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_6": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_6 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_7": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_7 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Panel_8",
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "1290"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_11": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_11": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "productAreaSelected",
                    "value": "Sinks"
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_9"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_8",
                    "transition": "slidedown"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_29"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_2",
                    "value": {
                      "datatype": "variable",
                      "element": "productAreaSelected"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_6",
                    "transition": "slidedown"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_19"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_12"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "parallel",
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_11": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFFFFF",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_11": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFFFFF",
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
    } else if(jFirer.is(".s-Grid_cell_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": ".s-Input_1",
                  "property": "jimGetValue"
                },"ARGOS" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_10"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11",
                    "transition": "slidedown"
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is(".s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": ".s-Input_1",
                  "property": "jimGetValue"
                },"ARGOS" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_10"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11",
                    "transition": "slidedown"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_30"
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
    } else if(jFirer.is("#s-Text_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_6",
                    "transition": "slidedown"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_10"
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Text_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_15"
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
    } else if(jFirer.is("#s-Text_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14"
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
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_6",
                    "transition": "slidedown"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_19"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_12"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "parallel",
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Text_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_6",
                    "transition": "slidedown"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_19"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_12"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "parallel",
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
  .on("pageload", ".s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "typeOfCheckout"
                  },"login" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "typeOfCheckout"
                  },"register" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_6"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_6",
                    "value": {
                      "datatype": "variable",
                      "element": "nameComplete"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4"
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
  .on("mouseenter dragenter", ".s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_11": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_11": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Image_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_11": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_11": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_3 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Rectangle_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_12": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_12": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_4": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_4 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Image_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_12": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_12": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_4": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_4 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Image_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_16": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_16": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Rectangle_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_16": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_16": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Rectangle_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_18": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_18": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Image_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_18": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_18": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Rectangle_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_19": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_19": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is("#s-Image_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_19": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Rectangle_19": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_5 span": {
                      "attributes": {
                        "color": "#DC281E",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
    } else if(jFirer.is(".s-Grid_cell_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-artFam .s-Grid_cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-artFam .s-Grid_cell_1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DC281E",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DC281E",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DC281E",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DC281E",
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
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-ProdList .s-Button_3": {
                      "attributes": {
                        "background-color": "#C2231B",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-ProdList .s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "#C2231B",
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
    } else if(jFirer.is("#s-Text_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_10": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_10 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#s-Text_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_16": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 #s-Text_16 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
  .on("mouseleave dragleave", ".s-dcf97696-fc7a-4e52-afda-be1b12dab0e2 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Grid_cell_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Button_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_16")) {
      jEvent.undoCases(jFirer);
    }
  });