jQuery("#simulation")
  .on("click", ".s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
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
                    "element": "email"
                  },"tora.collani@sharis.de" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressStreetAndNr",
                    "value": "Maxstr. 3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": "133347, Berlin"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressStreetAndNr",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ null,", " ]
                      },null ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": "Germany"
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
                    "variable": "deliveryAddressType",
                    "value": "same"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fd94477b-7c27-4eec-ae28-d5173d26b5f2"
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
    } else if(jFirer.is("#s-Button_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "streetProvisional",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_15",
                      "property": "jimGetValue"
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
                      "mainBill": "true",
                      "title": {
                        "datatype": "variable",
                        "element": "title"
                      },
                      "name": {
                        "datatype": "property",
                        "target": "#s-Input_10",
                        "property": "jimGetValue"
                      },
                      "lastname": {
                        "datatype": "property",
                        "target": "#s-Input_11",
                        "property": "jimGetValue"
                      },
                      "street": {
                        "datatype": "property",
                        "target": "#s-Input_15",
                        "property": "jimGetValue"
                      },
                      "houseNr.": null,
                      "afix": {
                        "datatype": "property",
                        "target": "#s-Input_19",
                        "property": "jimGetValue"
                      },
                      "zip": {
                        "datatype": "property",
                        "target": "#s-Input_20",
                        "property": "jimGetValue"
                      },
                      "city": {
                        "datatype": "property",
                        "target": "#s-Input_23",
                        "property": "jimGetValue"
                      },
                      "country": {
                        "datatype": "property",
                        "target": "#s-Category_6",
                        "property": "jimGetSelectedValue"
                      },
                      "addressName": null,
                      "email": {
                        "datatype": "variable",
                        "element": "email"
                      },
                      "completeName": {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Category_5",
                          "property": "jimGetSelectedValue"
                        },{
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ " ",{
                              "datatype": "property",
                              "target": "#s-Input_10",
                              "property": "jimGetValue"
                            } ]
                          },{
                            "action": "jimConcat",
                            "parameter": [ " ",{
                              "datatype": "property",
                              "target": "#s-Input_11",
                              "property": "jimGetValue"
                            } ]
                          } ]
                        } ]
                      },
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "newAddress"
                },"false" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_15"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "newAddress"
                },"false" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_1",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Addresses",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "email"
                          },{
                            "datatype": "variable",
                            "element": "email"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_2",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Addresses",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "email"
                          },{
                            "datatype": "variable",
                            "element": "email"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_1",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Addresses",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "email"
                          },{
                            "datatype": "variable",
                            "element": "email"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_2",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Addresses",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "email"
                            },{
                              "datatype": "variable",
                              "element": "email"
                            } ]
                          },{
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "street"
                            },{
                              "datatype": "variable",
                              "element": "streetProvisional"
                            } ]
                          } ]
                        }
                      }
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "newAddress"
                },"false" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressStreetAndNr",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_15",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_20",
                          "property": "jimGetValue"
                        },", " ]
                      },{
                        "datatype": "property",
                        "target": "#s-Input_23",
                        "property": "jimGetValue"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_6",
                      "property": "jimGetSelectedValue"
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
    } else if(jFirer.is("#s-Button_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "streetProvisional",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_15",
                      "property": "jimGetValue"
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
                      "mainBill": "true",
                      "title": {
                        "datatype": "variable",
                        "element": "title"
                      },
                      "name": {
                        "datatype": "property",
                        "target": "#s-Input_10",
                        "property": "jimGetValue"
                      },
                      "lastname": {
                        "datatype": "property",
                        "target": "#s-Input_11",
                        "property": "jimGetValue"
                      },
                      "street": {
                        "datatype": "property",
                        "target": "#s-Input_15",
                        "property": "jimGetValue"
                      },
                      "houseNr.": null,
                      "afix": {
                        "datatype": "property",
                        "target": "#s-Input_19",
                        "property": "jimGetValue"
                      },
                      "zip": {
                        "datatype": "property",
                        "target": "#s-Input_20",
                        "property": "jimGetValue"
                      },
                      "city": {
                        "datatype": "property",
                        "target": "#s-Input_23",
                        "property": "jimGetValue"
                      },
                      "country": {
                        "datatype": "property",
                        "target": "#s-Category_6",
                        "property": "jimGetSelectedValue"
                      },
                      "addressName": null,
                      "email": {
                        "datatype": "variable",
                        "element": "email"
                      },
                      "completeName": {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Category_5",
                          "property": "jimGetSelectedValue"
                        },{
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ " ",{
                              "datatype": "property",
                              "target": "#s-Input_10",
                              "property": "jimGetValue"
                            } ]
                          },{
                            "action": "jimConcat",
                            "parameter": [ " ",{
                              "datatype": "property",
                              "target": "#s-Input_11",
                              "property": "jimGetValue"
                            } ]
                          } ]
                        } ]
                      },
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "newAddress"
                },"false" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_15"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "newAddress"
                },"false" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_1",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Addresses",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "email"
                          },{
                            "datatype": "variable",
                            "element": "email"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_2",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Addresses",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "email"
                          },{
                            "datatype": "variable",
                            "element": "email"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_1",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Addresses",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "email"
                          },{
                            "datatype": "variable",
                            "element": "email"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_2",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Addresses",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "email"
                            },{
                              "datatype": "variable",
                              "element": "email"
                            } ]
                          },{
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "street"
                            },{
                              "datatype": "variable",
                              "element": "streetProvisional"
                            } ]
                          } ]
                        }
                      }
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "newAddress"
                },"false" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressStreetAndNr",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_15",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_20",
                          "property": "jimGetValue"
                        },", " ]
                      },{
                        "datatype": "property",
                        "target": "#s-Input_23",
                        "property": "jimGetValue"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_6",
                      "property": "jimGetSelectedValue"
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
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressStreetAndNr",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ null," " ]
                      },null ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": null
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
                    "variable": "fromBookDelivAddressStreetAndNr",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "fromBookDelivAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ null," " ]
                      },null ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "fromBookDelivAddressCountry",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "fromBookDelivAddressCompleteName",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ null," " ]
                          },null ]
                        }," " ]
                      },null ]
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
                    "variable": "newDelivAddressStreetAndNr",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "newDelivAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ null," " ]
                      },null ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "newDelivAddressCountry",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "newDelivAddressCompleteName",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ null," " ]
                          },null ]
                        }," " ]
                      },null ]
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fd94477b-7c27-4eec-ae28-d5173d26b5f2"
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
    } else if(jFirer.is("#s-Button_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_18"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14"
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
                    "target": "#s-Panel_17"
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
                    "target": "#s-billingAddress_4",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Addresses",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "email"
                          },{
                            "datatype": "variable",
                            "element": "email"
                          } ]
                        }
                      }
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
                    "variable": "newAddress",
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_18"
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
                    "target": "#s-Panel_17"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_15",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_19",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_20",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_23",
                    "value": ""
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
                    "target": "#s-billingAddress_4",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Addresses",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "email"
                          },{
                            "datatype": "variable",
                            "element": "email"
                          } ]
                        }
                      }
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
                    "variable": "newAddress",
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
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressStreetAndNr",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ null," " ]
                      },null ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": null
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
                    "variable": "fromBookDelivAddressStreetAndNr",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "fromBookDelivAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ null," " ]
                      },null ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "fromBookDelivAddressCountry",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "fromBookDelivAddressCompleteName",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ null," " ]
                          },null ]
                        }," " ]
                      },null ]
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
                    "variable": "newDelivAddressStreetAndNr",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "newDelivAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ null," " ]
                      },null ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "newDelivAddressCountry",
                    "value": null
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "newDelivAddressCompleteName",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ null," " ]
                          },null ]
                        }," " ]
                      },null ]
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fd94477b-7c27-4eec-ae28-d5173d26b5f2"
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
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "streetProvisional",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_15",
                      "property": "jimGetValue"
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
                      "mainBill": "true",
                      "title": {
                        "datatype": "variable",
                        "element": "title"
                      },
                      "name": {
                        "datatype": "property",
                        "target": "#s-Input_10",
                        "property": "jimGetValue"
                      },
                      "lastname": {
                        "datatype": "property",
                        "target": "#s-Input_11",
                        "property": "jimGetValue"
                      },
                      "street": {
                        "datatype": "property",
                        "target": "#s-Input_15",
                        "property": "jimGetValue"
                      },
                      "houseNr.": null,
                      "afix": {
                        "datatype": "property",
                        "target": "#s-Input_19",
                        "property": "jimGetValue"
                      },
                      "zip": {
                        "datatype": "property",
                        "target": "#s-Input_20",
                        "property": "jimGetValue"
                      },
                      "city": {
                        "datatype": "property",
                        "target": "#s-Input_23",
                        "property": "jimGetValue"
                      },
                      "country": {
                        "datatype": "property",
                        "target": "#s-Category_6",
                        "property": "jimGetSelectedValue"
                      },
                      "addressName": null,
                      "email": {
                        "datatype": "variable",
                        "element": "email"
                      },
                      "completeName": {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Category_5",
                          "property": "jimGetSelectedValue"
                        },{
                          "action": "jimConcat",
                          "parameter": [ {
                            "action": "jimConcat",
                            "parameter": [ " ",{
                              "datatype": "property",
                              "target": "#s-Input_10",
                              "property": "jimGetValue"
                            } ]
                          },{
                            "action": "jimConcat",
                            "parameter": [ " ",{
                              "datatype": "property",
                              "target": "#s-Input_11",
                              "property": "jimGetValue"
                            } ]
                          } ]
                        } ]
                      },
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "newAddress"
                },"false" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_15"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_5"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "newAddress"
                },"false" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_1",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Addresses",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "email"
                          },{
                            "datatype": "variable",
                            "element": "email"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_2",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Addresses",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "email"
                          },{
                            "datatype": "variable",
                            "element": "email"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_1",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Addresses",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "email"
                          },{
                            "datatype": "variable",
                            "element": "email"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-billingAddress_2",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Addresses",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "email"
                            },{
                              "datatype": "variable",
                              "element": "email"
                            } ]
                          },{
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "street"
                            },{
                              "datatype": "variable",
                              "element": "streetProvisional"
                            } ]
                          } ]
                        }
                      }
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "newAddress"
                },"false" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressStreetAndNr",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_15",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressZipAndCity",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_20",
                          "property": "jimGetValue"
                        },", " ]
                      },{
                        "datatype": "property",
                        "target": "#s-Input_23",
                        "property": "jimGetValue"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "billingAddressCountry",
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_6",
                      "property": "jimGetSelectedValue"
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
    }
  })
  .on("keyup.jim", ".s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_11"
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
    } else if(jFirer.is("#s-Input_11")) {
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
    } else if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_19"
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
    } else if(jFirer.is("#s-Input_19")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_20"
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
    } else if(jFirer.is("#s-Input_20")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_23"
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
    } else if(jFirer.is("#s-Input_12")) {
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
  .on("pageload", ".s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-Category_5",
                    "value": {
                      "datatype": "variable",
                      "element": "title"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_10",
                    "value": {
                      "datatype": "variable",
                      "element": "name"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_11",
                    "value": {
                      "datatype": "variable",
                      "element": "lastname"
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
    }
  })
  .on("focusin", ".s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Category_5": {
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
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_10": {
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
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_11": {
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
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_15": {
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
    } else if(jFirer.is("#s-Input_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_19": {
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
    } else if(jFirer.is("#s-Input_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_20": {
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
    } else if(jFirer.is("#s-Input_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_23": {
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
    } else if(jFirer.is("#s-Category_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Category_6": {
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
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_12": {
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
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_13": {
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
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_14": {
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
  .on("focusout", ".s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Category_5": {
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
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_10": {
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
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_11": {
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
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_15": {
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
    } else if(jFirer.is("#s-Input_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_19": {
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
    } else if(jFirer.is("#s-Input_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_20": {
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
    } else if(jFirer.is("#s-Input_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_23": {
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
    } else if(jFirer.is("#s-Category_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Category_6": {
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
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_12": {
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
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_13": {
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
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Input_14": {
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
  .on("mouseenter dragenter", ".s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Button_8": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Button_8": {
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
    } else if(jFirer.is("#s-Button_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Button_12": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Button_12": {
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
    } else if(jFirer.is("#s-Button_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Button_13": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Button_13": {
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
    } else if(jFirer.is("#s-Button_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Button_10": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Button_10": {
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
    } else if(jFirer.is("#s-Button_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Button_4": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Button_4": {
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
    } else if(jFirer.is("#s-Button_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Button_11": {
                      "attributes": {
                        "background-color": "#9E1E14",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b #s-Button_11": {
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
    } else if(jFirer.is("#s-Image_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_5"
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
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_2")) {
      jEvent.undoCases(jFirer);
    }
  });