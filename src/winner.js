import React from "react";
import Table from "./tblmain";
export default function winner(props){
const winner=[
    [1,2,3],[4,5,6]
    [7,8,9],[1,4,7]
    [2,5,8],[3,6,9]
    [1,5,9],[3,5,7]
]
for (let i = 0; i < winner.length; i++) {
    if (
        document.getElementById(winner[i][0])=== {props.shuffle}&&
        document.getElementById(winner[i][1]).innerHTML === Symbol &&
        document.getElementById(winner[i][2]).innerHTML === Symbol
    ) {
        document.getElementById(winner[i][0]).className.add("win");
        document.getElementById(winner[i][1]).className.add("win");
        document.getElementById(winner[i][2]).className.add("win");
    }
}

}