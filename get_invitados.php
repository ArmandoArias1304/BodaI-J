<?php
require_once 'conexion.php';

header('Content-Type: application/json'); // Asegurar que la respuesta sea JSON

if (isset($_GET['id'])) {
    $id = intval($_GET['id']); // Sanitizar el ID recibido por la URL

    try {
        $conexion = (new Conexion())->getConexion();

        $sql = "SELECT * FROM invitados WHERE id = :id";
        $stmt = $conexion->prepare($sql);
        $stmt->bindValue(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        $invitado = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($invitado) {
            echo json_encode($invitado); // Devolver los datos en formato JSON
        } else {
            echo json_encode(["error" => "No se encontró el invitado."]);
        }
    } catch (PDOException $e) {
        echo json_encode(["error" => "Error en la consulta: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["error" => "ID no proporcionado."]);
}
?>