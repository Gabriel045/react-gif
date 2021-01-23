import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import GifExpertApp from './GifExpertApp.js'

const divRoot = document.querySelector('#root')
ReactDom.render( < GifExpertApp / > , divRoot);

const apiKey = 'rZ580dt87J8ZeZpYe584NnxC8mdk3sbZ';
console.log(apiKey);