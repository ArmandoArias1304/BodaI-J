<?php

class Conexion {
    private $host = "localhost";
    private $usuario = "root";
    private $password = "";
    private $baseDatos = "invitados";
    private $conexion;

    public function __construct() {
        try {
            $dsn = "mysql:host=$this->host;dbname=$this->baseDatos;charset=utf8mb4";
            $this->conexion = new PDO($dsn, $this->usuario, $this->password);
            // Configurar el modo de error de PDO para excepciones
            $this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->log("Conexión exitosa a la base de datos.");
        } catch (PDOException $e) {
            $this->log("Error en la conexión: " . $e->getMessage());
            die("Error en la conexión: " . $e->getMessage());
        }
    }

    public function getConexion() {
        return $this->conexion;
    }

    public function cerrarConexion() {
        $this->conexion = null;
        $this->log("Conexión cerrada.");
    }

    private function log($mensaje) {
        $fecha = date("Y-m-d H:i:s");
        file_put_contents("conexion.log", "[$fecha] $mensaje" . PHP_EOL, FILE_APPEND);
    }
}


?>