import transformResponse from 'v2/ion/responseTransformer';
import XHRFactorRequiredEmail from '../../../../../playground/mocks/idp/idx/data/factor-verification-email.json';

describe('v2/ion/responseTransformer', function () {
  it('returns result when invokes with invalid resp', () => {
    expect(transformResponse()).toBeNull();
    expect(transformResponse('hello')).toBeNull();
  });

  it('converts factor required email idx object', () => {
    const rawFactorRequiredEmailResponse = XHRFactorRequiredEmail;
    const idxObjectFactorRequiredEmail  = {
      'proceed': jasmine.any(Function),
      'neededToProceed': [
        {
          'rel':[
            'create-form'
          ],
          'name':'challenge-factor',
          'href':'http://localhost:3000/idp/idx/challenge/answer',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'credentials',
              'form':{
                'value':[
                  {
                    'name':'passcode',
                    'label':'One-time verification code',
                    'secret':true,
                    'method':'post'
                  }
                ],
                'method':'post'
              },
              'method':'post'
            }
          ]
        },
        {
          'rel':[
            'create-form'
          ],
          'name':'select-factor',
          'href':'http://localhost:3000/idp/idx/challenge',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'factorId',
              'type':'set',
              'options':[
                {
                  'label':'Password',
                  'value':'00u2j17ObFUsbGfLg0g4',
                  'method':'options'
                },
                {
                  'label':'Email',
                  'value':'emf2j1ccd6CF4IWFY0g3',
                  'method':'options'
                }
              ],
              'method':'post'
            }
          ]
        }
      ],
      'actions':{
        'factor-resend': {},
        'factor-poll': {},
        'cancel': {},
      },
      'context':{
        'stateHandle':'02WTSGqlHUPjoYvorz8T48txBIPe3VUisrQOY4g5N8',
        'version':'1.0.0',
        'expiresAt':'2019-09-30T22:19:25.000Z',
        'step':'AUTHENTICATE',
        'intent':'LOGIN',
        'factors':{
          'type':'array',
          'value':[
            {
              'factorType':'password',
              'factorProfileId':'00u2j17ObFUsbGfLg0g4'
            },
            {
              'factorType':'email',
              'factorProfileId':'emf2j1ccd6CF4IWFY0g3'
            }
          ]
        },
        'factor':{
          'type':'object',
          'value':{
            'factorType':'email',
            'factorProfileId':'emf1axecbKovLJPWl0g4',
            'factorId':'emfv6q1VxHR52T9az0g3',
            'profile':{
              'email':'inca@clouditude.net'
            }
          }
        },
        'user':{
          'type':'object',
          'value':{
            'id':'00usip1dptbE7NiLa0g3'
          }
        }
      },
      'rawIdxState':rawFactorRequiredEmailResponse
    };

    const result = transformResponse(idxObjectFactorRequiredEmail);
    expect(result).toEqual({
      'proceed': jasmine.any(Function),
      'remediations': [
        {
          'value':[
            {
              'name':'credentials',
              'form':{
                'value':[
                  {
                    'name':'passcode',
                    'label':'One-time verification code',
                    'secret':true,
                    'method':'post'
                  }
                ],
                'method':'post'
              },
              'method':'post'
            }
          ],
          'name':'challenge-factor',
          'href': 'http://localhost:3000/idp/idx/challenge/answer',
          'method':'post'
        },
        {
          'value':[
            {
              'name':'factorId',
              'type':'set',
              'options':[
                {
                  'label':'Password',
                  'value':'00u2j17ObFUsbGfLg0g4',
                  'method':'options'
                },
                {
                  'label':'Email',
                  'value':'emf2j1ccd6CF4IWFY0g3',
                  'method':'options'
                }
              ],
              'method':'post'
            }
          ],
          'name':'select-factor',
          'href': 'http://localhost:3000/idp/idx/challenge',
          'method':'post'
        }
      ],
      'neededToProceed': [
        {
          'rel':[
            'create-form'
          ],
          'name':'challenge-factor',
          'href':'http://localhost:3000/idp/idx/challenge/answer',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'credentials',
              'form':{
                'value':[
                  {
                    'name':'passcode',
                    'label':'One-time verification code',
                    'secret':true,
                    'method':'post'
                  }
                ],
                'method':'post'
              },
              'method':'post'
            }
          ]
        },
        {
          'rel':[
            'create-form'
          ],
          'name':'select-factor',
          'href':'http://localhost:3000/idp/idx/challenge',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'factorId',
              'type':'set',
              'options':[
                {
                  'label':'Password',
                  'value':'00u2j17ObFUsbGfLg0g4',
                  'method':'options'
                },
                {
                  'label':'Email',
                  'value':'emf2j1ccd6CF4IWFY0g3',
                  'method':'options'
                }
              ],
              'method':'post'
            }
          ]
        }
      ],
      'actions':{
        'factor-resend':{},
        'factor-poll':{},
        'cancel':{}
      },
      'context':{
        'stateHandle':'02WTSGqlHUPjoYvorz8T48txBIPe3VUisrQOY4g5N8',
        'version':'1.0.0',
        'expiresAt':'2019-09-30T22:19:25.000Z',
        'step':'AUTHENTICATE',
        'intent':'LOGIN',
        'factors':{
          'type':'array',
          'value':[
            {
              'factorType':'password',
              'factorProfileId':'00u2j17ObFUsbGfLg0g4'
            },
            {
              'factorType':'email',
              'factorProfileId':'emf2j1ccd6CF4IWFY0g3'
            }
          ]
        },
        'factor':{
          'type':'object',
          'value':{
            'factorType':'email',
            'factorProfileId':'emf1axecbKovLJPWl0g4',
            'factorId':'emfv6q1VxHR52T9az0g3',
            'profile':{
              'email':'inca@clouditude.net'
            }
          }
        },
        'user':{
          'type':'object',
          'value':{
            'id':'00usip1dptbE7NiLa0g3'
          }
        }
      },
      'factors':{
        'value':[
          {
            'factorType':'password',
            'factorProfileId':'00u2j17ObFUsbGfLg0g4'
          },
          {
            'factorType':'email',
            'factorProfileId':'emf2j1ccd6CF4IWFY0g3'
          }
        ]
      },
      'factor':{
        'factorType':'email',
        'factorProfileId':'emf2j1ccd6CF4IWFY0g3',
        'factorId':'emfv6q1VxHR52T9az0g3',
        'profile':{
          'email':'inca@clouditude.net'
        },
        'resend': {
          'rel': [
            'create-form'
          ],
          'name': 'resend',
          'href': 'http://localhost:3000/idp/idx/challenge/resend',
          'method': 'POST',
          'accepts': 'application/vnd.okta.v1+json',
          'value': [
            {
              'name': 'stateHandle',
              'required': true,
              'value': '02WTSGqlHUPjoYvorz8T48txBIPe3VUisrQOY4g5N8',
              'visible': false,
              'mutable': false
            }
          ]
        },
        'poll': {
          'rel': [
            'create-form'
          ],
          'name': 'poll',
          'href': 'http://localhost:3000/idp/idx/challenge/poll',
          'method': 'POST',
          'accepts': 'application/vnd.okta.v1+json',
          'refresh': 4000,
          'value': [
            {
              'name': 'stateHandle',
              'required': true,
              'value': '02WTSGqlHUPjoYvorz8T48txBIPe3VUisrQOY4g5N8',
              'visible': false,
              'mutable': false
            }
          ]
        }
      },
      'user':{
        'id':'00usip1dptbE7NiLa0g3'
      },
      'rawIdxState':rawFactorRequiredEmailResponse
    });
  });

  it('converts terminal transfered', () => {
    const idxObjectTerminalTransfered  = {
      'proceed': jasmine.any(Function),
      'neededToProceed':[],
      'actions':{},
      'context':{
        'version':'1.0.0',
        'stateHandle':'01OCl7uyAUC4CUqHsObI9bvFiq01cRFgbnpJQ1bz82',
        'terminal':{
          'type':'object',
          'value':{
            'name':'terminal-transfered',
            'message':{
              'message':'Flow continued in a new tab.',
              'i18n':{
                'key':'idx.session.expired',
                'params':[

                ]
              }
            }
          }
        },
        'factor':{
          'type':'object',
          'value':{
            'factorType':'email',
            'provider':'okta',
            'profile':{
              'email':'o*****m@abbott.dev'
            }
          }
        }
      },
      'rawIdxState': {
        'version':'1.0.0',
        'stateHandle':'01OCl7uyAUC4CUqHsObI9bvFiq01cRFgbnpJQ1bz82',
        'terminal':{
          'type':'object',
          'value':{
            'name':'terminal-transfered',
            'message':{
              'message':'Flow continued in a new tab.',
              'i18n':{
                'key':'idx.session.expired',
                'params':[

                ]
              }
            }
          }
        },
        'factor':{
          'type':'object',
          'value':{
            'factorType':'email',
            'provider':'okta',
            'profile':{
              'email':'o*****m@abbott.dev'
            }
          }
        }
      }
    };
    const result = transformResponse(idxObjectTerminalTransfered);
    expect(result).toEqual({
      'terminal':{
        'name':'terminal-transfered',
        'message':{
          'message':'Flow continued in a new tab.',
          'i18n':{
            'key':'idx.session.expired',
            'params':[

            ]
          }
        }
      },
      'remediations': [],
      'factor':{
        'factorType':'email',
        'provider':'okta',
        'profile':{
          'email':'o*****m@abbott.dev'
        }
      },
      'proceed': jasmine.any(Function),
      'neededToProceed':[],
      'actions':{

      },
      'context':{
        'version':'1.0.0',
        'stateHandle':'01OCl7uyAUC4CUqHsObI9bvFiq01cRFgbnpJQ1bz82',
        'terminal':{
          'type':'object',
          'value':{
            'name':'terminal-transfered',
            'message':{
              'message':'Flow continued in a new tab.',
              'i18n':{
                'key':'idx.session.expired',
                'params':[

                ]
              }
            }
          }
        },
        'factor':{
          'type':'object',
          'value':{
            'factorType':'email',
            'provider':'okta',
            'profile':{
              'email':'o*****m@abbott.dev'
            }
          }
        }
      },
      'rawIdxState':{
        'version':'1.0.0',
        'stateHandle':'01OCl7uyAUC4CUqHsObI9bvFiq01cRFgbnpJQ1bz82',
        'terminal':{
          'type':'object',
          'value':{
            'name':'terminal-transfered',
            'message':{
              'message':'Flow continued in a new tab.',
              'i18n':{
                'key':'idx.session.expired',
                'params':[

                ]
              }
            }
          }
        },
        'factor':{
          'type':'object',
          'value':{
            'factorType':'email',
            'provider':'okta',
            'profile':{
              'email':'o*****m@abbott.dev'
            }
          }
        }
      }
    });
  });
});
