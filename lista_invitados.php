<?php
require_once 'Conexion.php';

try {
    $conexion = (new Conexion())->getConexion();

    // Consulta para obtener todos los invitados
    $sql = "SELECT id, nombre, numero_mesa, numero_asiento, numero_confirmacion FROM invitados";
    $stmt = $conexion->query($sql);
    $invitados = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Devolver los datos en formato JSON
    echo json_encode($invitados);
} catch (PDOException $e) {
    echo json_encode(["error" => "Error al obtener la lista de invitados: " . $e->getMessage()]);
}
?>