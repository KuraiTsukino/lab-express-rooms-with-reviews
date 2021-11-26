// 1. Importaciones

const express = require("express")
// import express from "express" // ECMAS 6, node no está actualizado, por ahora no funciona, hay varias formas de escribir todo
const app = express()

require("dotenv").config() // activa variables de entorno

const path = require("path")
// 2. Middlewares

// Archivos estáticos, hace la conexión con carpeta public 
app.use(express.static(path.join(__dirname, "public"))) // ya no es necesario poner la /

// Para usar el req.body, para obtener los datos de los formularios
app.use(express.urlencoded({extended:true}))

// Vistas
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")

// 3. Rutas
// Home
app.use("/", require("./routes"))

// 4. Exportación

module.exports = app