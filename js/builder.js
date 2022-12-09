let counter = 1;
function assignTypes (new_type) {
    new_type.id = counter++;
    p_one.types.push(new_type)
}

let selectize_inputs = {
    1: {selectize: {}, options: []},
    2: {selectize: {}, options: []},
    3: {selectize: {}, options: []},
    4: {selectize: {}, options: []},
    5: {selectize: {}, options: []},
    6: {selectize: {}, options: []}
};

let p_one = {
    config: {
        create: false,
        delimiter: '|',
        valueField: 'id',
        labelField: 'name',
        searchField: 'name',
        maxItems: 2,
        plugins: ['remove_button'],
        onType: function (value, $item){
            console.dir(value);
            console.dir($item);
            console.dir(p_one.types); // debug - remove
        },
        onOptionAdd: function (value) {
            console.dir(value); // debug - remove
        },
        onInitialize: function (selectize){
            console.dir(selectize); // debug - remove
            // store all the selectize properties
            selectize_inputs[1].selectize = selectize;
            selectize_inputs[1].options = selectize.options;
        },
        onItemAdd: function(value, $item) {
            console.dir(value); // debug - remove
            // styleSelectizeOptions($item);
            // populateTypeChoices(1, $item);
        },
        onItemRemove: function (value,$item) {
            // removeTypeChoices(1, $item);
            // console.dir(data.type_choices);
        }
    },
    types: [],
    type_search: [],
};


(function (window, types,p_one) {
    console.dir(types); // debug - remove
    function pageCtrl ($scope, $http, $document, $timeout) {
        console.dir(types); // debug - remove
        let data = {
            type_choices: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: []
            }
        }
        
        const edit = {
            _test: function () {
                console.dir(this.new_type); // debug - remove
            },
            new_type: {
                add: function () {
                    let self = edit.new_type;
                    let formatted_type = {
                        name: self.name,
                        resistances: self.resistances.split(","),
                        strengths: self.strengths.split(","),
                        weaknesses: self.weaknesses.split(","),
                    }
                    $http.post(URLS.ADD_TYPE, formatted_type)
                        .then(function (resp){
                            console.dir(resp.data); // debug - remove
                        }, function (err){
                            console.error(err);  // debug - remove TODO: Add modal error handling
                        })
                },
                name: '',
                resistances: '',
                strengths: '',
                weaknesses: ''
            },
            remove_type: {
                name: '',
                remove: function () {
                    $http.post(URLS.REMOVE_TYPE, {name: edit.remove_type.name})
                        .then(function (resp){
                            console.dir(resp.data); // debug - remove
                        }, function (err){
                            console.error(err);  // debug - remove TODO: Add modal error handling
                        })
                }
            },
            update_type: {
                update: function () {
                    let self = edit.update_type;
                    let formatted_type = {
                        name: self.name,
                        resistances: self.resistances.split(","),
                        strengths: self.strengths.split(","),
                        weaknesses: self.weaknesses.split(","),
                    };
                
                    $http.post(URLS.UPDATE_TYPE, formatted_type)
                        .then(function (resp){
                            console.dir(resp.data); // debug - remove
                        }, function (err){
                            console.error(err);  // debug - remove TODO: Add modal error handling
                        })
                },
                name: '',
                resistances: '',
                strengths: '',
                weaknesses: ''
            }
        }
    
    
        let selectize_inputs = {
            1: {selectize: {}, options: []},
            2: {selectize: {}, options: []},
            3: {selectize: {}, options: []},
            4: {selectize: {}, options: []},
            5: {selectize: {}, options: []},
            6: {selectize: {}, options: []}
        };
    
        let pokemon_one = p_one;
    
        let pokemon_two = {
            config: {
                create: false,
                delimiter: '/',
                valueField: 'id',
                labelField: 'type',
                searchField: 'type',
                maxItems: 2,
                plugins: ['remove_button'],
                onInitialize: function (selectize){
                    // store all the selectize properties
                    selectize_inputs[2].selectize = selectize;
                    selectize_inputs[2].options = selectize.options;
                },
                onItemAdd: function(value, $item) {
                    styleSelectizeOptions($item);
                    populateTypeChoices(2, $item);
                },
                onItemRemove: function (value,$item) {
                    removeTypeChoices(2, $item);
                }
            },
            types: [],
            type_search: [],
        };
    
        let pokemon_three = {
            config: {
                create: false,
                delimiter: '/',
                valueField: 'id',
                labelField: 'name',
                searchField: 'name',
                maxItems: 2,
                plugins: ['remove_button'],
                onInitialize: function (selectize){
                    // store all the selectize properties
                    selectize_inputs[3].selectize = selectize;
                    selectize_inputs[3].options = selectize.options;
                },
                onItemAdd: function(value, $item) {
                    styleSelectizeOptions($item);
                    populateTypeChoices(3, $item);
                },
                onItemRemove: function (value,$item) {
                    removeTypeChoices(3, $item);
                }
            },
            types: [],
            type_search: [],
        };
    
        let pokemon_four = {
            config: {
                create: false,
                delimiter: '/',
                valueField: 'id',
                labelField: 'name',
                searchField: 'name',
                maxItems: 2,
                plugins: ['remove_button'],
                onInitialize: function (selectize){
                    // store all the selectize properties
                    selectize_inputs[4].selectize = selectize;
                    selectize_inputs[4].options = selectize.options;
                },
                onItemAdd: function(value, $item) {
                    styleSelectizeOptions($item);
                    populateTypeChoices(4, $item);
                },
                onItemRemove: function (value,$item) {
                    removeTypeChoices(4, $item);
                }
            },
            types: [],
            type_search: [],
        };
    
        let pokemon_five = {
            config: {
                create: false,
                delimiter: '/',
                valueField: 'id',
                labelField: 'name',
                searchField: 'name',
                maxItems: 2,
                plugins: ['remove_button'],
                onInitialize: function (selectize){
                    // store all the selectize properties
                    selectize_inputs[5].selectize = selectize;
                    selectize_inputs[5].options = selectize.options;
                },
                onItemAdd: function(value, $item) {
                    styleSelectizeOptions($item);
                    populateTypeChoices(5, $item);
                },
                onItemRemove: function (value,$item) {
                    removeTypeChoices(5, $item);
                }
            },
            types: [],
            type_search: [],
        };
    
        let pokemon_six = {
            config: {
                create: false,
                delimiter: '/',
                valueField: 'id',
                labelField: 'name',
                searchField: 'name',
                maxItems: 2,
                plugins: ['remove_button'],
                onInitialize: function (selectize){
                    // store all the selectize properties
                    selectize_inputs[6].selectize = selectize;
                    selectize_inputs[6].options = selectize.options;
                },
                onItemAdd: function(value, $item) {
                    styleSelectizeOptions($item);
                    populateTypeChoices(6, $item);
                },
                onItemRemove: function (value,$item) {
                    removeTypeChoices(6, $item);
                }
            },
            types: [],
            type_search: [],
        };
    
        function addTypeEverywhere (type) {
            pokemon_one.types.push(type);
            pokemon_two.types.push(type);
            pokemon_three.types.push(type);
            pokemon_four.types.push(type);
            pokemon_five.types.push(type);
            pokemon_six.types.push(type);
        }
    
    
        /*
            Function populates the array associated with the number passed in.
            The array_num param will be a number 1 - 6 reflecting the number of choices.
            Option will be the type chosen.
         */
        function populateTypeChoices(array_num, option) {
            // leave function if not between correct number range
            if (array_num < 1 || array_num > 6) {
                console.error(`The number must be between 1 - 6, received ${array_num}`);
                return;
            }
            if (!data.type_choices[array_num].length) data.type_choices[array_num] = [option[0].firstChild.data];
            else data.type_choices[array_num].push(option[0].firstChild.data);
        
        }
    
    
        /*
        *   Remove the passed in option from the array corresponding to the array_num.
         */
        function removeTypeChoices(array_num, option) {
            // leave function if not between correct number range
            if (array_num < 1 || array_num > 6) {
                console.error(`The number must be between 1 - 6, received ${array_num}`);
                return;
            }
            _.remove(data.type_choices[array_num], (type) => {
                return type === option[0].firstChild.data;
            })
        }
    
        /*
            Adds the custom class to selected selectize options based on Pokemon type.
         */
        function styleSelectizeOptions(option) {
            option[0].classList.add(option[0].firstChild.data.toLowerCase());
        }
        
        function _test (data) {
        }
        
        function init() {
            console.dir(pokemon_one); // debug
        }
    
        // init the page
        angular.element(document).ready(async function () {
            $timeout(function () {
                init();
            }, 5000);
        });
        return {
            _test,
            edit,
            p_one,
            pokemon_one,
            pokemon_two,
            pokemon_three,
            pokemon_four,
            pokemon_five,
            pokemon_six,
        }
    }
    let app = angular.module('pageApp', ['selectize']);
    app.controller("pageCtrl", [
        '$scope' ,
        '$http',
        '$document',
        '$timeout',
        pageCtrl]);
   
})(window, [],p_one)
