
var regex_aircraft = 'A:(A1-(A5|E1)|A2-(A6|E2)|A3-(A7|E3)|A4-(A8|E4)|A5-(A9|E5)|A6-(A10|E6)|A7-E7|A8-E8|A9-E9|A10-E10|B1-(B5|F1)|B2-(B6|F2)|B3-(B7|F3)|B4-(B8|F4)|B5-(B9|F5)|B6-(B10|F6)|B7-F7|B8-F8|B9-F9|B10-F10|C1-(C5|G1)|C2-(C6|G2)|C3-(C7|G3)|C4-(C8|G4)|C5-(C9|G5)|C6-(C10|G6)|C7-G7|C8-G8|C9-G9|C10-G10|D1-(D5|H1)|D2-(D6|H2)|D3-(D7|H3)|D4-(D8|H4)|D5-(D9|H5)|D6-(D10|H6)|D7-H7|D8-H8|D9-H9|D10-H10|E1-(E5|I1)|E2-(E6|I2)|E3-(E7|I3)|E4-(E8|I4)|E5-(E9|I5)|E6-(E10|I6)|E7-I7|E8-I8|E9-I9|E10-I10|F1-(F5|J1)|F2-(F6|J2)|F3-(F7|J3)|F4-(F8|J4)|F5-(F9|J5)|F6-(F10|J6)|F7-J7|F8-J8|E9-I9|E10-I10|G1-G5|G2-G6|G3-G7|G4-G8|G5-G9|G6-G10|H1-H5|H2-H6|H3-G7|H4-H8|H5-H9|H6-H10|I1-I5|I2-I6|I3-I7|I4-I8|I5-I9|I6-I10|J1-J5|J2-J6|J3-J7|J4-J8|J5-J9|J6-J10)(;?)|A[(](A1-(A5|E1)|A2-(A6|E2)|A3-(A7|E3)|A4-(A8|E4)|A5-(A9|E5)|A6-(A10|E6)|A7-E7|A8-E8|A9-E9|A10-E10|B1-(B5|F1)|B2-(B6|F2)|B3-(B7|F3)|B4-(B8|F4)|B5-(B9|F5)|B6-(B10|F6)|B7-F7|B8-F8|B9-F9|B10-F10|C1-(C5|G1)|C2-(C6|G2)|C3-(C7|G3)|C4-(C8|G4)|C5-(C9|G5)|C6-(C10|G6)|C7-G7|C8-G8|C9-G9|C10-G10|D1-(D5|H1)|D2-(D6|H2)|D3-(D7|H3)|D4-(D8|H4)|D5-(D9|H5)|D6-(D10|H6)|D7-H7|D8-H8|D9-H9|D10-H10|E1-(E5|I1)|E2-(E6|I2)|E3-(E7|I3)|E4-(E8|I4)|E5-(E9|I5)|E6-(E10|I6)|E7-I7|E8-I8|E9-I9|E10-I10|F1-(F5|J1)|F2-(F6|J2)|F3-(F7|J3)|F4-(F8|J4)|F5-(F9|J5)|F6-(F10|J6)|F7-J7|F8-J8|E9-I9|E10-I10|G1-G5|G2-G6|G3-G7|G4-G8|G5-G9|G6-G10|H1-H5|H2-H6|H3-G7|H4-H8|H5-H9|H6-H10|I1-I5|I2-I6|I3-I7|I4-I8|I5-I9|I6-I10|J1-J5|J2-J6|J3-J7|J4-J8|J5-J9|J6-J10)[)](;?)';
var regex_battleship = 'B:(A1-(A4|D1)|A2-(A5|D2)|A3-(A6|D3)|A4-(A7|D4)|A5-(A8|D5)|A6-(A9|D6)|A7-(A10|D7)|A8-D8|A9-D9|A10-D10|B1-(B4|E1)|B2-(B5|E2)|B3-(B6|E3)|B4-(B7|E4)|B5-(B8|E5)|B6-(B9|E6)|B7-(B10|E7)|B8-E8|B9-E9|B10-E10|C1-(C4|F1)|C2-(C5|F2)|C3-(C6|F3)|C4-(C7|F4)|C5-(C8|F5)|C6-(C9|F6)|C7-(C10|F7)|C8-F8|C9-F9|C10-F10|D1-(D4|G1)|D2-(D5|G2)|D3-(D6|G3)|D4-(D7|G4)|D5-(D8|G5)|D6-(D9|G6)|D7-(D10|G7)|D8-G8|D9-G9|D10-G10|E1-(E4|H1)|E2-(E5|H2)|E3-(E6|H3)|E4-(E7|H4)|E5-(E8|H5)|E6-(E9|H6)|E7-(E10|H7)|E8-H8|E9-H9|E10-H10|F1-(F4|I1)|F2-(F5|I2)|F3-(F6|I3)|F4-(F7|I4)|F5-(F8|I5)|F6-(F9|I6)|F7-(F10|I7)|F8-I8|F9-I9|F10-I10|G1-(G4|J1)|G2-(G5|J2)|G3-(G6|J3)|G4-(G7|J4)|G5-(G8|J5)|G6-(G9|J6)|G7-(G10|J7)|G8-J8|G9-J9|G10-J10|H1-H4|H2-H5|H3-H6|H4-H7|H5-H8|H6-H9|H7-H10|I1-I4|I2-I5|I3-I6|I4-I7|I5-I8|I6-I9|I7-I10|J1-J4|J2-J5|J3-J6|J4-J7|J5-J8|J6-J9|J7-J10)(;?)|B[(](A1-(A4|D1)|A2-(A5|D2)|A3-(A6|D3)|A4-(A7|D4)|A5-(A8|D5)|A6-(A9|D6)|A7-(A10|D7)|A8-D8|A9-D9|A10-D10|B1-(B4|E1)|B2-(B5|E2)|B3-(B6|E3)|B4-(B7|E4)|B5-(B8|E5)|B6-(B9|E6)|B7-(B10|E7)|B8-E8|B9-E9|B10-E10|C1-(C4|F1)|C2-(C5|F2)|C3-(C6|F3)|C4-(C7|F4)|C5-(C8|F5)|C6-(C9|F6)|C7-(C10|F7)|C8-F8|C9-F9|C10-F10|D1-(D4|G1)|D2-(D5|G2)|D3-(D6|G3)|D4-(D7|G4)|D5-(D8|G5)|D6-(D9|G6)|D7-(D10|G7)|D8-G8|D9-G9|D10-G10|E1-(E4|H1)|E2-(E5|H2)|E3-(E6|H3)|E4-(E7|H4)|E5-(E8|H5)|E6-(E9|H6)|E7-(E10|H7)|E8-H8|E9-H9|E10-H10|F1-(F4|I1)|F2-(F5|I2)|F3-(F6|I3)|F4-(F7|I4)|F5-(F8|I5)|F6-(F9|I6)|F7-(F10|I7)|F8-I8|F9-I9|F10-I10|G1-(G4|J1)|G2-(G5|J2)|G3-(G6|J3)|G4-(G7|J4)|G5-(G8|J5)|G6-(G9|J6)|G7-(G10|J7)|G8-J8|G9-J9|G10-J10|H1-H4|H2-H5|H3-H6|H4-H7|H5-H8|H6-H9|H7-H10|I1-I4|I2-I5|I3-I6|I4-I7|I5-I8|I6-I9|I7-I10|J1-J4|J2-J5|J3-J6|J4-J7|J5-J8|J6-J9|J7-J10)[)](;?)';
var regex_submarine = 'S:(A1-(A3|C1)|A2-(A4|C2)|A3-(A5|C3)|A4-(A6|C4)|A5-(A7|C5)|A6-(A8|C6)|A7-(A9|C7)|A8-(A10|C8)|A9-C9|A10-C10|B1-(B3|D1)|B2-(B4|D2)|B3-(B5|D3)|B4-(B6|D4)|B5-(B7|D5)|B6-(B8|D6)|B7-(B9|D7)|B8-(B10|D8)|B9-D9|B10-D10|C1-(C3|E1)|C2-(C4|E2)|C3-(C5|E3)|C4-(C6|E4)|C5-(C7|E5)|C6-(C8|E6)|C7-(C9|E7)|C8-(C10|E8)|C9-E9|C10-E10|D1-(D3|F1)|D2-(D4|F2)|D3-(D5|F3)|D4-(D6|F4)|D5-(D7|F5)|D6-(D8|F6)|D7-(D9|F7)|D8-(D10|F8)|D9-F9|D10-F10|E1-(E3|G1)|E2-(E4|G2)|E3-(E5|G3)|E4-(E6|G4)|E5-(E7|G5)|E6-(E8|G6)|E7-(E9|G7)|E8-(E10|G8)|E9-G9|E10-G10|F1-(F3|H1)|F2-(F4|H2)|F3-(F5|H3)|F4-(F6|H4)|F5-(F7|H5)|F6-(F8|H6)|F7-(F9|H7)|F8-(F10|H8)|F9-H9|F10-H10|G1-(G3|I1)|G2-(G4|I2)|G3-(G5|I3)|G4-(G6|I4)|I5-(G7|I5)|G6-(G8|I6)|G7-(G9|I7)|G8-(G10|I8)|G9-I9|G10-I10|H1-(H3|J1)|H2-(H4|J2)|H3-(H5|J3)|H4-(H6|J4)|J5-(H7|J5)|H6-(H8|J6)|H7-(H9|J7)|H8-(H10|J8)|H9-J9|H10-J10|I1-I3|I2-I4|I3-I5|I4-I6|I5-I7|I6-I8|I7-I9|I8-I10|J1-J3|J2-J4|J3-J5|J4-J6|J5-J7|J6-J8|J7-J9|J8-J10)(;?)|S[(](A1-(A3|C1)|A2-(A4|C2)|A3-(A5|C3)|A4-(A6|C4)|A5-(A7|C5)|A6-(A8|C6)|A7-(A9|C7)|A8-(A10|C8)|A9-C9|A10-C10|B1-(B3|D1)|B2-(B4|D2)|B3-(B5|D3)|B4-(B6|D4)|B5-(B7|D5)|B6-(B8|D6)|B7-(B9|D7)|B8-(B10|D8)|B9-D9|B10-D10|C1-(C3|E1)|C2-(C4|E2)|C3-(C5|E3)|C4-(C6|E4)|C5-(C7|E5)|C6-(C8|E6)|C7-(C9|E7)|C8-(C10|E8)|C9-E9|C10-E10|D1-(D3|F1)|D2-(D4|F2)|D3-(D5|F3)|D4-(D6|F4)|D5-(D7|F5)|D6-(D8|F6)|D7-(D9|F7)|D8-(D10|F8)|D9-F9|D10-F10|E1-(E3|G1)|E2-(E4|G2)|E3-(E5|G3)|E4-(E6|G4)|E5-(E7|G5)|E6-(E8|G6)|E7-(E9|G7)|E8-(E10|G8)|E9-G9|E10-G10|F1-(F3|H1)|F2-(F4|H2)|F3-(F5|H3)|F4-(F6|H4)|F5-(F7|H5)|F6-(F8|H6)|F7-(F9|H7)|F8-(F10|H8)|F9-H9|F10-H10|G1-(G3|I1)|G2-(G4|I2)|G3-(G5|I3)|G4-(G6|I4)|I5-(G7|I5)|G6-(G8|I6)|G7-(G9|I7)|G8-(G10|I8)|G9-I9|G10-I10|H1-(H3|J1)|H2-(H4|J2)|H3-(H5|J3)|H4-(H6|J4)|J5-(H7|J5)|H6-(H8|J6)|H7-(H9|J7)|H8-(H10|J8)|H9-J9|H10-J10|I1-I3|I2-I4|I3-I5|I4-I6|I5-I7|I6-I8|I7-I9|I8-I10|J1-J3|J2-J4|J3-J5|J4-J6|J5-J7|J6-J8|J7-J9|J8-J10)[)](;?)';

var turn = 0;

var p1_name;
var p1_shots = [];
var p1_hit_count = 0;
var p1_miss_count = 0;

var p1_aircraft_coor = [];
var p1_battleship_coor = [];
var p1_submarine_coor = [];

var p1_aircraft_sunk = false;
var p1_battleship_sunk = false;
var p1_submarine_sunk = false;


var p2_name;
var p2_shots = [];
var p2_hit_count = 0;
var p2_miss_count = 0;

var p2_aircraft_coor = [];
var p2_battleship_coor = [];
var p2_submarine_coor = [];

var p2_aircraft_sunk = false;
var p2_battleship_sunk = false;
var p2_submarine_sunk = false;


var default_tile = "•";


document.addEventListener("DOMContentLoaded", function(event) {

    if(localStorage.getItem("perfect_score") == null ||  localStorage.getItem("score_history") == null){
        var sc = [];
        localStorage.setItem("score_history",JSON.stringify(sc));
        localStorage.setItem("perfect_score",0);
    }


    ////////////////////////////////////////////////////////////////////////////////

    var mainBoard = document.getElementById("battleship_panel");

    //////////////////////////////////////////////////////////////////////////////

    var turn_switch_panel = document.getElementById("turn_switch_panel");
    var turn_player_one_name = document.getElementById("turn_p1_name");
    var turn_player_two_name = document.getElementById("turn_p2_name");

    var turn_player_one_hit = document.getElementById("turn_p1_hit");
    var turn_player_two_hit = document.getElementById("turn_p2_hit");
    var turn_player_one_miss = document.getElementById("turn_p1_miss");
    var turn_player_two_miss = document.getElementById("turn_p2_miss");
    var turn_banner = document.getElementById("turn_name_indicator");
    var turn_btn = document.getElementById("btn_switch_turn");
    turn_btn.addEventListener("click",nextTurn);



    //////////////////////////////////////////////////////////////////////////////


    var init_board = document.getElementById("init_panel_board");
    var init_panel = document.getElementById("init_panel_entry");

    var gamePanel = document.getElementById("gamePanel");

    var input_aircraft_holder = document.getElementById("aircraft_carrier_coor_holder");
    var input_battleship_holder = document.getElementById("battleship_coor_holder");
    var input_submarine_holder = document.getElementById("sub_coor_holder");

    var input_aircraft = document.getElementById("aircraft_carrier_coor");
    var input_battleship = document.getElementById("battleship_coor");
    var input_submarine = document.getElementById("sub_coor");

    var input_name = document.getElementById("name_entry");

    input_aircraft.setAttribute("pattern",regex_aircraft);
    input_battleship.setAttribute("pattern",regex_battleship);
    input_submarine.setAttribute("pattern",regex_submarine);


    var btn_confirm = document.getElementById("confirm");
    btn_confirm.setAttribute("disabled",true);

    var btn_clear = document.getElementById("clear");


    btn_clear.addEventListener("click", function(){
        clearForm(true);
    });

    btn_confirm.addEventListener("click",confirm);


    input_name.addEventListener("input", liveUpdateGrid);
    input_aircraft.addEventListener("input", liveUpdateGrid);
    input_battleship.addEventListener("input", liveUpdateGrid);
    input_submarine.addEventListener("input", liveUpdateGrid);



    var gameboard = document.getElementById("battleship_panel");


    buildGameBoard("N");
    buildGameBoard("S");



    buildConfigurationScreen();

    //////////////////////////////////////////////////////////////////////////////

    function liveUpdateGrid(item){

        if(turn == 0) p1_name = input_name.value;
        else p2_name = input_name.value;

        if(isValidFilled()) btn_confirm.removeAttribute("disabled");
        else btn_confirm.setAttribute("disabled",true);

        if(item.srcElement.validity.valid && item.srcElement.value.length > 0){


            var parsed = String(item.srcElement.value).replace(";","");
            var shortForm = parsed.substr(2);
            var longForm = parsed.substring(2,parsed.length-1);

            switch(item.srcElement.id) {
                case input_aircraft.id:
                    if (turn == 0) {
                        if (p1_aircraft_coor[0] != null) {
                            p1_aircraft_coor.forEach(function (item) {
                                item.firstChild.textContent = default_tile;
                            });
                        }
                        if (parsed.length == 7) p1_aircraft_coor = buildCoorArray(shortForm, p1_battleship_coor, p1_submarine_coor, input_aircraft);
                        else p1_aircraft_coor = buildCoorArray(longForm, p1_battleship_coor, p1_submarine_coor, input_aircraft_holder);
                    }
                    else {
                        if (p2_aircraft_coor[0] != null) {
                            p2_aircraft_coor.forEach(function (item) {
                                item.firstChild.textContent = default_tile;
                            });
                        }
                        p2_aircraft_coor.forEach(function (item) {
                            item.firstChild.textContent = default_tile;
                        });
                        if (parsed.length == 7) p2_aircraft_coor = buildCoorArray(shortForm, p2_battleship_coor, p2_submarine_coor, input_aircraft);
                        else p2_aircraft_coor = buildCoorArray(longForm, p2_battleship_coor, p2_submarine_coor, input_aircraft);
                    }
                    break;
                case input_battleship.id:
                    if (turn == 0) {
                        if (p1_battleship_coor[0] != null) {
                            p1_battleship_coor.forEach(function (item) {
                                item.firstChild.textContent = default_tile;
                            });
                        }
                        if (parsed.length == 7) p1_battleship_coor = buildCoorArray(shortForm, p1_aircraft_coor, p1_submarine_coor, input_battleship);
                        else p1_battleship_coor = buildCoorArray(longForm, p1_aircraft_coor, p1_submarine_coor, input_battleship);
                    }
                    else {
                        if (p2_battleship_coor[0] != null) {
                            p2_battleship_coor.forEach(function (item) {
                                item.firstChild.textContent = default_tile;
                            });
                        }
                        if (parsed.length == 7) p2_battleship_coor = buildCoorArray(shortForm, p2_aircraft_coor, p2_submarine_coor, input_battleship);
                        else p2_battleship_coor = buildCoorArray(longForm, p2_aircraft_coor, p2_submarine_coor, input_battleship);
                    }
                    break;
                case input_submarine.id:
                    if (turn == 0) {
                        if (p1_submarine_coor[0] != null) {
                            p1_submarine_coor.forEach(function (item) {
                                item.firstChild.textContent = default_tile;
                            });
                        }
                        if (parsed.length == 7) p1_submarine_coor = buildCoorArray(shortForm, p1_aircraft_coor, p1_battleship_coor, input_submarine);
                        else p1_submarine_coor = buildCoorArray(longForm, p1_aircraft_coor, p1_battleship_coor, input_submarine);
                    }
                    else {
                        if (p2_submarine_coor[0] != null) {
                            p2_submarine_coor.forEach(function (item) {
                                item.firstChild.textContent = default_tile;
                            });
                        }
                        if (parsed.length == 7) p2_submarine_coor = buildCoorArray(shortForm, p2_aircraft_coor, p2_battleship_coor, input_submarine);
                        else p2_submarine_coor = buildCoorArray(longForm, p2_aircraft_coor, p2_battleship_coor, input_submarine);
                    }
                    break;
                }
            }
        else{
            switch(item.srcElement.id){
                case input_aircraft.id:
                    if(turn == 0 && p1_aircraft_coor[0] != null) {
                        p1_aircraft_coor.forEach(function(c){
                            c.firstChild.textContent = default_tile;
                        });
                        p1_aircraft_coor = [];
                    }
                    else if(p2_aircraft_coor[0] != null) {
                        p2_aircraft_coor.forEach(function(c){
                            c.firstChild.textContent = default_tile;
                        });
                        p2_aircraft_coor = [];
                    }
                    break;
                case input_battleship.id:
                    if(turn == 0 && p1_battleship_coor[0] != null) {
                        p1_battleship_coor.forEach(function(c){
                            c.firstChild.textContent = default_tile;
                        });
                        p1_battleship_coor = [];
                    }
                    else if(p2_battleship_coor[0] != null){
                        p2_battleship_coor.forEach(function(c){
                            c.firstChild.textContent = default_tile;
                        });
                        p2_battleship_coor = [];
                    }
                    break;
                case input_submarine.id:
                    if(turn == 0 && p1_submarine_coor[0] != null) {
                        p1_submarine_coor.forEach(function(c){
                            c.firstChild.textContent = default_tile;
                        });
                        p1_submarine_coor = [];
                    }
                    else if(p1_submarine_coor[0] != null){
                        p2_submarine_coor.forEach(function(c){
                            c.firstChild.textContent = default_tile;
                        });
                        p2_submarine_coor = [];
                    }
                    break;
            }
        }

        updateShip(input_aircraft.validity.valid && (input_aircraft.value.length > 0), p1_aircraft_coor, p2_aircraft_coor, "A");
        updateShip(input_battleship.validity.valid && (input_battleship.value.length > 0), p1_battleship_coor, p2_battleship_coor, "B");
        updateShip(input_submarine.validity.valid && (input_submarine.value.length > 0), p1_submarine_coor, p2_submarine_coor, "S");

    }

    function updateShip(valid_state, p1_array, p2_array, ship_letter){
        var temp = [];
        if(turn == 0) temp = p1_array;
        else temp = p2_array;

        if(valid_state){
            temp.forEach(function(item){
                item.firstChild.textContent = ship_letter;
            });
        }
    }

    function buildCoorArray(coor, array1, array2, input){

        var start = coor.substring(0,2);
        var end = coor.substring(3);

        var numDiff = parseInt(end.charAt(1)-start.charAt(1))+1;
        var letterDiff = end.charCodeAt(0)-start.charCodeAt(0)+1;
        var coorArray = [];//[parseInt(end.charAt(1)-start.charAt(1))];


        if(start.charAt(0) == end.charAt(0)){
            for(var i = 0; i < numDiff; i++){
                coorArray.push(document.getElementById(start.charAt(0)+(i+parseInt(start.charAt(1)))));
            }
        }
        else {
            var nextChar = start.charAt(0);
            for(var z = 0; z < letterDiff; z++){
                coorArray.push(document.getElementById(nextChar+start.charAt(1)));
                nextChar = String.fromCharCode(nextChar.charCodeAt(0) + 1);
            }
        }

        var cross = 0;

        coorArray.forEach(function(x){

            array1.forEach(function(y){
                if(y.id === x.id) cross += 1;
            });

            array2.forEach(function(z){
                if(z.id === x.id) cross += 1;
            });

        });



        if(cross > 0 && input.validity.valid){
            alert("Overlaping coordinates are not allowed, clearing overlapping coordinates");
            input.value = "";

            return [];
        }
        else{
            return coorArray;
        }

    }

    function buildConfigurationScreen(){
        var rowID = ['HEADER','A','B','C','D','E','F','G','H','I','J','FOOTER'];

        for(var i = 0; i < 12; i++){
            var row = document.createElement("div");
            row.id = rowID[i];
            row.classList.add("mdl-grid");
            row.classList.add("row");

            gamePanel.appendChild(row);
            populateInitRow(rowID[i], row);
        }

        var footer = document.createElement("div");
        footer.classList.add("mdl-grid");
        footer.classList.add("boardHeader");
        footer.classList.add("row");

    }

    function populateInitRow(pos, row){
        var positionID = "p";
        for(var z = 0; z < 12; z++){
            var tile = document.createElement("div");
            tile.classList.add("mdl-cell");
            tile.classList.add("mdl-cell--1-col");


            if(z == 0 || z == 11 || pos == 'HEADER' || pos == 'FOOTER'){
                tile.classList.add("edge");

            }
            else{
                tile.id = pos+z;
                tile.classList.add("tile");
            }

            tile.classList.add("mdl-grid");
            tile.classList.add("center-items");

            row.appendChild(tile);

            var tileContent = document.createElement("p");

            if(pos == 'HEADER' && z > 0 && z < 11){
                tileContent.textContent = z;
                tile.appendChild(tileContent);
            }
            else if(z == 0 && pos !== 'HEADER' && pos !== "FOOTER"){
                tileContent.textContent = pos;
                tile.appendChild(tileContent);
            }
            else if(z > 0 && z < 11 && pos != "FOOTER"){
                tileContent.textContent = default_tile;
                tile.appendChild(tileContent);
            }

        }
    }

    function isValidFilled(){

        return input_aircraft.validity.valid && input_battleship.validity.valid && input_submarine.validity.valid &&
            input_name.value.length >= 1 && input_aircraft.value.length >= 1 && input_battleship.value.length >=1 && input_submarine.value.length >= 1;
    }

    function clearForm(isReset){

        if(isReset) {
            if (turn == 0) {
                p1_name = "";
                p1_aircraft_coor.forEach(cleanShip);
                p1_battleship_coor.forEach(cleanShip);
                p1_submarine_coor.forEach(cleanShip);

                p1_aircraft_coor = [];
                p1_battleship_coor = [];
                p1_submarine_coor = [];

            }
            else {
                p2_name = "";
                p2_aircraft_coor.forEach(cleanShip);
                p2_battleship_coor.forEach(cleanShip);
                p2_submarine_coor.forEach(cleanShip);

                p2_aircraft_coor = [];
                p2_battleship_coor = [];
                p2_submarine_coor = [];
            }

        }

        function cleanShip(item){
            var element = document.getElementById(item);
            element.firstElementChild.textContent = default_tile;
        }

        input_name.value = "";

        input_aircraft.value = "";
        input_aircraft_holder.classList.remove("is-invalid");
        input_aircraft_holder.classList.remove("is-upgraded");
        input_aircraft_holder.classList.remove("is-dirty");
        input_aircraft_holder.classList.remove("is-invalid");
        input_aircraft_holder.classList.remove("is-focused");

        input_battleship.value = "";
        input_battleship_holder.classList.remove("is-invalid");
        input_battleship_holder.classList.remove("is-upgraded");
        input_battleship_holder.classList.remove("is-dirty");
        input_battleship_holder.classList.remove("is-invalid");
        input_battleship_holder.classList.remove("is-focused");

        input_submarine.value = "";
        input_submarine_holder.classList.remove("is-invalid");
        input_submarine_holder.classList.remove("is-upgraded");
        input_submarine_holder.classList.remove("is-dirty");
        input_submarine_holder.classList.remove("is-invalid");
        input_submarine_holder.classList.remove("is-focused");
    }

    function confirm(){
        if(turn == 0){
            turn += 1;
            var s = 0;

            p1_aircraft_coor.forEach(function (item) {
                item.firstChild.textContent = default_tile;
                p1_aircraft_coor[s] = item.id;
                s++;
            });
            s = 0;
            p1_battleship_coor.forEach(function (item) {
                item.firstChild.textContent = default_tile;
                p1_battleship_coor[s] = item.id;
                s++;
            });
            s = 0;
            p1_submarine_coor.forEach(function (item) {
                item.firstChild.textContent = default_tile;
                p1_submarine_coor[s] = item.id;
                s++;
            });

            clearForm(false);

            document.getElementById("setup_name").textContent = "Player 2";
        }
        else{

            var s = 0;
            p2_aircraft_coor.forEach(function (item) {
                item.firstChild.textContent = default_tile;
                p2_aircraft_coor[s] = item.id;
                s++;
            });
            s = 0;
            p2_battleship_coor.forEach(function (item) {
                item.firstChild.textContent = default_tile;
                p2_battleship_coor[s] = item.id;
                s++;
            });
            s = 0;
            p2_submarine_coor.forEach(function (item) {
                item.firstChild.textContent = default_tile;
                p2_submarine_coor[s] = item.id;
                s++;
            });


            init_board.classList.add("hidden");
            init_panel.classList.add("hidden");
            turn = 0;
            showTurnSwitch();

        }
    }

    //////////////////////////////////////////////////////////////////////////////

    /*
        Called each turn switch
     */
    function nextTurn(){
        turn_switch_panel.classList.add("hidden");
        mainBoard.classList.remove("hidden");
        paintBoard();
    }

    function showTurnSwitch(){
        if(!mainBoard.classList.contains("hidden")){
            mainBoard.classList.add("hidden");
            var hits = document.querySelectorAll("p.hit");
            hits.forEach(function(item){
                item.classList.remove("hit");
            });

            var miss = document.querySelectorAll("p.miss");
            miss.forEach(function(item){
               item.classList.remove("miss");
            });
        }
        turn_switch_panel.classList.remove("hidden");

        if(turn == 0){
            turn_banner.textContent = p1_name;
        }
        else{
            turn_banner.textContent = p2_name;
        }

        turn_player_one_name.textContent = p1_name;
        turn_player_one_hit.textContent = p1_hit_count;
        turn_player_one_miss.textContent = p1_miss_count;


        turn_player_two_name.textContent = p2_name;
        turn_player_two_hit.textContent = p2_hit_count;
        turn_player_two_miss.textContent = p2_miss_count;

    }

    function paintBoard(){


        if(turn == 0){

            p1_aircraft_coor.forEach(function(item){
                var info = "S"+item;
                var tile = document.getElementById(info);
                tile.firstChild.textContent = "A";
            });
            p1_battleship_coor.forEach(function(item){
                var info = "S"+item;
                var tile = document.getElementById(info);
                tile.firstChild.textContent = "B";
            });
            p1_submarine_coor.forEach(function(item){
                var info = "S"+item;
                var tile = document.getElementById(info);
                tile.firstChild.textContent = "S";
            });
            p1_shots.forEach(function(item){

                var jsonObj = JSON.parse(item);

                var info = "N"+jsonObj.pos;

                var tile = document.getElementById(info).firstChild;
                if(jsonObj.hit){
                    tile.classList.add("hit")
                }
                else{
                    tile.classList.add("miss")
                }

            });

            p2_shots.forEach(function(item){
                //var info = "N"+item;
                //var tile = document.getElementById(info);
                var jsonObj = JSON.parse(item);
                var info = "S"+jsonObj.pos;
                var tile = document.getElementById(info).firstChild;

                if(jsonObj.hit){
                    tile.classList.add("hit")
                }
                else{
                    tile.classList.add("miss")
                }
            });
        }
        else{

            p2_aircraft_coor.forEach(function(item){
                var info = "S"+item;
                var tile = document.getElementById(info);
                tile.firstChild.textContent = "A";
            });
            p2_battleship_coor.forEach(function(item){
                var info = "S"+item;
                var tile = document.getElementById(info);
                tile.firstChild.textContent = "B";
            });
            p2_submarine_coor.forEach(function(item){
                var info = "S"+item;
                var tile = document.getElementById(info);
                tile.firstChild.textContent = "S";
            });
            p2_shots.forEach(function(item){
                var jsonObj = JSON.parse(item);
                var info = "N"+jsonObj.pos;
                var tile = document.getElementById(info).firstChild;
                if(jsonObj.hit){
                    tile.classList.add("hit")
                }
                else{
                    tile.classList.add("miss")
                }
            });
            p1_shots.forEach(function(item){
                //var info = "N"+item;
                //var tile = document.getElementById(info);
                var jsonObj = JSON.parse(item);
                var info = "S"+jsonObj.pos;
                var tile = document.getElementById(info).firstChild ;

                if(jsonObj.hit){
                    tile.classList.add("hit")
                }
                else{
                    tile.classList.add("miss")
                }
            });
        }


    }

    function fire(c){
        if(turn == 0){

            var loc = c.substring(1);

            if(p2_aircraft_coor.indexOf(loc) > -1)
                paintHit(c,p2_aircraft_coor, p1_shots,"Aircraft Carrier",5);
            else if(p2_battleship_coor.indexOf(loc) > -1)
                paintHit(c,p2_battleship_coor, p1_shots,"Battleship",4);
            else if(p2_submarine_coor.indexOf(loc) > -1)
                paintHit(c,p2_submarine_coor, p1_shots,"Submarine",3);
            else
                paintMiss(c, p1_shots);
        }
        else{
            var loc = c.substring(1);

            if(p1_aircraft_coor.indexOf(loc) > -1)
                paintHit(c,p1_aircraft_coor, p2_shots,"Aircraft Carrier",5);
            else if(p1_battleship_coor.indexOf(loc) > -1)
                paintHit(c,p1_battleship_coor, p2_shots,"Battleship",4);
            else if(p1_submarine_coor.indexOf(loc) > -1)
                paintHit(c,p1_submarine_coor, p2_shots,"Submarine",3);
            else
                paintMiss(c,p2_shots);
        }

        if(turn == 0) turn = 1;
        else turn = 0;

        if(p1_aircraft_sunk && p1_battleship_sunk && p1_submarine_sunk){
            win(1);
        }
        else if(p2_aircraft_sunk && p2_battleship_sunk && p2_submarine_sunk){
            win(2);
        }
        else{
            setTimeout(function(){showTurnSwitch();}, 500);
        }

    }

    function paintHit(c, array, shots, shipName, shipSize){
        document.getElementById(c).firstChild.classList.add("hit");

        var obj = '{'
            +'"pos" : "'+c.substring(1)+'",'
            +'"hit" : '+ true
            +'}';

        shots.push(obj);

        console.log(shots);

        var concentratedHits = 0;
        array.forEach(function (point) {

            var check = '{'
                +'"pos" : "'+point+'",'
                +'"hit" : '+ true
                +'}';

            console.log(point);
            if(shots.indexOf(check) > -1){
                concentratedHits += 1;
            }
        });

        if(concentratedHits == shipSize) {
            if(turn == 0){
                switch (shipSize){
                    case 5:
                        p1_aircraft_sunk = true;
                        break;
                    case 4:
                        p1_battleship_sunk = true;
                        break;
                    case 3:
                        p1_submarine_sunk = true;
                        break;
                }
            }
            else{
                switch (shipSize){
                    case 5:
                        p2_aircraft_sunk = true;
                        break;
                    case 4:
                        p2_battleship_sunk = true;
                        break;
                    case 3:
                        p2_submarine_sunk = true;
                        break;
                }
            }
            alert("Direct hit captain! You sunk the enemy's " + shipName);

        }
        else
            alert("Hit!");


        if(turn == 0){
            p1_hit_count += 1;
        }
        else{
            p2_hit_count += 1;
        }
    }

    function paintMiss(c, shots){
        document.getElementById(c).firstChild.classList.add("miss");

        var obj = '{'
            +'"pos" : "'+c.substring(1)+'",'
            +'"hit" : '+ false
            +'}';


        shots.push(obj);

        alert("Miss, better luck next time");



        if(turn == 0){
            p1_miss_count += 1;
        }
        else{
            p2_miss_count += 1;
        }
    }

    //////////////////////////////////////////////////////////////////////////////

    function buildGameBoard(direction){

        var subBoard = document.createElement("div");

        if(direction === "N"){
            subBoard.classList.add("mdl-shadow--8dp");
            subBoard.classList.add("north-board");
        }
        else{
            subBoard.classList.add("mdl-shadow--2dp");
            subBoard.classList.add("south-board");
        }

        gameboard.appendChild(subBoard);

        var letters = ["A","B","C","D","E","F","G","H","I","J"];
        for(var i = 0; i < 12; i++){

            var row = document.createElement("div");
            row.classList.add("mdl-grid");
            row.classList.add("no-margin-padding");
            row.classList.add("g_row");
            subBoard.appendChild(row);


            if(i == 0){
                for(var x = 0; x < 12; x++){
                    var gTileX = document.createElement("div");
                    gTileX.classList.add("mdl-cell--1-col");
                    if(x == 0 || x == 11){
                        gTileX.classList.add("g_edge");
                        row.appendChild(gTileX);
                    }
                    else{
                        gTileX.classList.add("g_edge_head");
                        gTileX.classList.add("mdl-typography--text-center");
                        row.appendChild(gTileX);
                        var letterLabelX = document.createElement("p");
                        letterLabelX.textContent = x;
                        gTileX.appendChild(letterLabelX);

                    }
                }
            }
            else if(i > 0 && i < 11){
                for(var y = 0; y < 12; y++){
                    var gTileY = document.createElement("div");
                    gTileY.classList.add("mdl-cell--1-col");

                    if(y == 0 ) {
                        gTileY.classList.add("g_edge");
                        gTileY.classList.add("mdl-typography--text-center");
                        var axisLabel = document.createElement("p");
                        axisLabel.textContent = letters[i-1];
                        row.appendChild(gTileY);
                        gTileY.appendChild(axisLabel);

                    }
                    else if(y == 11){
                        gTileY.classList.add("g_edge");
                        row.appendChild(gTileY);
                    }
                    else{
                        gTileY.classList.add("g_tile");
                        gTileY.classList.add("mdl-typography--text-center");
                        gTileY.id = direction+letters[i-1]+y;
                        row.appendChild(gTileY);
                        var letterLabel = document.createElement("p");
                        letterLabel.textContent = default_tile;
                        gTileY.appendChild(letterLabel);

                    }
                    if(direction == "N") {
                        gTileY.addEventListener("click", function (item) {
                            if (item.srcElement.tagName === "P") {
                                if(!item.srcElement.classList.contains("hit") &&
                                    !item.srcElement.classList.contains("miss")){
                                    console.log(item.srcElement.parentNode.id);
                                    fire(item.srcElement.parentNode.id);
                                }

                            }
                            else if(item.srcElement.children.length == 1 && item.srcElement.classList.contains("g_tile")){
                                if(!item.srcElement.firstChild.classList.contains("hit") &&
                                    !item.srcElement.firstChild.classList.contains("miss"))

                                    fire(item.srcElement.id);
                            }
                            else{
                                console.log(item.srcElement);
                            }
                        });
                    }
                }
            }
        }

    }


    //////////////////////////////////////////////////////////////////////////////

    function win(player){

        var winner_score = 24;
        var winner_name;

        if(player == 1){
            winner_score = winner_score - (2*p2_hit_count);
            winner_name = p1_name;
        }
        else{
            winner_score = winner_score - (2*p1_hit_count);
            winner_name = p2_name;
        }

        var score_history = JSON.parse(localStorage.getItem("score_history"));
        var perfect_score = localStorage.getItem("perfect_score");

        console.log("SCORE HISTORY");
        console.log(score_history);
        console.log("PERFECT SCORE COUNT");
        console.log(perfect_score);

        if(perfect_score < 10){


            var entry = JSON.parse('{ "name": '+'"'+winner_name+'", "score": '+winner_score+"}");


            if(winner_score == 24){
                var new_score = parseInt(perfect_score);
                new_score += 1;
                localStorage.setItem("perfect_score", new_score);
            }

            score_history.push(entry);

            score_history.sort(function(a, b) {
                return parseInt(b.score) - parseInt(a.score);
            });

            if(score_history.length > 10){
                score_history.pop();
            }

            localStorage.setItem("score_history",JSON.stringify(score_history));

        }

        console.log(score_history);




    }


});


