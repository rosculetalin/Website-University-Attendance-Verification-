// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export let environment = {
  production: false,
  actualUser: '',
  users: [
            {
                "username": "test",
                "password": "test",
                "name": "Alin",
                "surname": "Rosculet",
                "email": "rosculet.alin.ionut@gmail.com",
                "id": "322AA",
                "attendance" : ["114"]
            },
            {
                "username": "test1",
                "password": "test1",
                "name": "Ion",
                "surname": "Vasile",
                "email": "ion.vasile@gmail.com",
                "id": "322AB",
                "attendance" : []
            }  
  ],
  laboratories: [
            {
                "name": "AWJ",
                "dates": [
                            {
                                "day": "Monday",
                                "hour": 1300
                            },
                            {
                                "day": "Tuesday",
                                "hour": 1800
                            }
                ],
                "groups": ["322AB", "322AC"],
                "id": "111"
            }, 
                    {
                        "name": "BD",
                        "dates": [
                                    {
                                        "day": "Tuesday",
                                        "hour": 1100
                                    },
                                    {
                                        "day": "Friday",
                                        "hour": 1000
                                    }
                        ],
                        "groups": ["322AA"],
                        "id": "120"
                    }
  ],
  courses: [
                    {
                        "name": "AWJ",
                        "dates": [
                                    {
                                        "day": "Monday",
                                        "hour": 1300
                                    },
                                    {
                                        "day": "Tuesday",
                                        "hour": 1800
                                    }
                        ],
                        "groups": ["322AB", "322AC"],
                        "id": "113"
                    }, 
                    {
                        "name": "BD",
                        "dates": [
                                    {
                                        "day": "Monday",
                                        "hour": 1100
                                    },
                                    {
                                        "day": "Friday",
                                        "hour": 1000
                                    }
                        ],
                        "groups": ["322AA"],
                        "id": "114"
                    },
  ] 
};