let counter = 1;

function assignTypes (new_type) {
    console.dir(new_type); // debug - remove
    new_type.id = counter++;
    p_1.types.push(new_type);
    p_2.types.push(new_type);
    p_3.types.push(new_type);
    p_4.types.push(new_type);
    p_5.types.push(new_type);
    p_6.types.push(new_type);
}

function styleSelectizeOptions(option) {
    option[0].classList.add(option[0].firstChild.data.toLowerCase());
}

let selectize_obj = {
    config: {
        create: false,
        delimiter: '|',
        valueField: 'type',
        labelField: 'type',
        searchField: 'type',
        maxItems: 2,
        plugins: ['remove_button'],
        onInitialize: function (selectize){
            // store all the selectize properties
            // selectize_inputs[1].selectize = selectize;
            // selectize_inputs[1].options = selectize.options;
        },
        onItemAdd: function(value, $item) {
            styleSelectizeOptions($item);
        }
    },
    types: [],
    type_search: [],
};

let p_1 = _.cloneDeep(selectize_obj);
let p_2 = _.cloneDeep(selectize_obj);
let p_3 = _.cloneDeep(selectize_obj);
let p_4 = _.cloneDeep(selectize_obj);
let p_5 = _.cloneDeep(selectize_obj);
let p_6 = _.cloneDeep(selectize_obj);



(function (window,types,p_1,p_2,p_3,p_4,p_5,p_6) {
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
    
        let pokemon_one = p_1;
        let pokemon_two = p_2;
        let pokemon_three = p_3;
        let pokemon_four = p_4;
        let pokemon_five = p_5;
        let pokemon_six = p_6;
        
        function calculateWeaknesses() {
            console.dir(pokemon_one); // debug - remove
            let first = pokemon_one.type_search[0];
            console.dir(pokemon_one.types.find((t) => t.type == first));
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
        
        function watchTypes () {
            $timeout(function () {
                init();
            }, 2000);
        }
        
        function _test (data) {
        }
        
        function init() {
        }
    
        // init the page
        angular.element(document).ready(async function () {
            $timeout(function () {
                init();
            }, 2000);
        });
        return {
            _test,
            calculateWeaknesses,
            edit,
            p_1,
            pokemon_one,
            pokemon_two,
            pokemon_three,
            pokemon_four,
            pokemon_five,
            pokemon_six,
            watchTypes
        }
    }
    let app = angular.module('pageApp', ['selectize']);
    app.controller("pageCtrl", [
        '$scope' ,
        '$http',
        '$document',
        '$timeout',
        pageCtrl]);
    
   
})(window,[],p_1,p_2,p_3,p_4,p_5,p_6)
