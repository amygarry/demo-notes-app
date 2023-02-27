import React, {useRef, useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import { Api, loadingContainer } from "aws-amplify"
import { onError } from "../lib/errorLib"

export default function Notes(){
    const file = useRef(null);
    const {id}= useParams();
    const nav = useNavigate();
    const [note, setNote]= useState(null);
    const [content, setContent]= useState("")

    useEffect(()=>{
        function lo
    })
}