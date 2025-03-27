<?php
require_once 'Conexion.php';

header('Content-Type: application/json'); // Asegurar que la respuesta sea JSON

if (isset($_GET['id']) && isset($_GET['confirm'])) {
    $id = intval($_GET['id']); // Sanitizar el ID recibido por la URL
    $confirm = intval($_GET['confirm']); // Sanitizar el número de confirmación

    try {
        $conexion = (new Conexion())->getConexion();

        $sql = "UPDATE invitados SET numero_confirmacion = :confirm WHERE id = :id";
        $stmt = $conexion->prepare($sql);
        $stmt->bindValue(':id', $id, PDO::PARAM_INT);
        $stmt->bindValue(':confirm', $confirm, PDO::PARAM_INT);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            if ($confirm == 0) {
                echo json_encode(["success" => "Has confirmado que no podrás asistir."]);
            } else {
                echo json_encode(["success" => "Número de confirmación actualizado correctamente."]);
            }
        } else {
            echo json_encode(["error" => "No se encontró el invitado o no se realizaron cambios."]);
        }
    } catch (PDOException $e) {
        echo json_encode(["error" => "Error en la consulta: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["error" => "Parámetros 'id' y 'confirm' son requeridos."]);
}
?>