import React from 'react';
import NavBar from '../components/NavBar';
import store,{reset} from '../redux_store/store';
import { first, second, third, fourth, fifth } from '../tests/level';
import PlasticCal from '../components/PlasticCal';

function ResultPage() {
    const result = []
    let index = 0
    const answer = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    let src = ""
    for (let i of store.getState().test[0].submit) {
        if (answer[index] == i)
            result.push(1)
        else
            result.push(0)
        index += 1
    }
    const score = result.reduce(function add(a, b) { return a + b; }, 0) * 10
    src = score < 50 ? fifth : score < 70 ? fourth : score < 90 ? third : score < 100 ? second : first
    return (
        <div >
            <NavBar />
            <p>나의  점수</p>
            <div>{score}</div>
            <img src={src} width="300px"></img>
            <PlasticCal/>
        </div>
    )
}

export default ResultPage;
