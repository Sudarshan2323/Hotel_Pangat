<?php
include '../php/db.php';

$sql = "SELECT b.booking_id, u.name, u.email, u.phone, b.date, b.time, b.guests, b.status, b.created_at 
        FROM table_bookings b
        JOIN users u ON b.user_id = u.user_id
        ORDER BY b.created_at DESC";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table>
            <tr>
                <th>Booking ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Actions</th>
            </tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['booking_id']}</td>
                <td>{$row['name']}</td>
                <td>{$row['email']}</td>
                <td>{$row['phone']}</td>
                <td>{$row['date']}</td>
                <td>{$row['time']}</td>
                <td>{$row['guests']}</td>
                <td>
                    <select onchange=\"updateBookingStatus({$row['booking_id']}, this.value)\">
                        <option value='Pending' ".($row['status'] == 'Pending' ? 'selected' : '').">Pending</option>
                        <option value='Confirmed' ".($row['status'] == 'Confirmed' ? 'selected' : '').">Confirmed</option>
                        <option value='Cancelled' ".($row['status'] == 'Cancelled' ? 'selected' : '').">Cancelled</option>
                    </select>
                </td>
                <td>{$row['created_at']}</td>
                <td>
                    <button onclick=\"deleteBooking({$row['booking_id']})\" class='delete-btn'>Delete</button>
                </td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "No bookings found.";
}

$conn->close();
?>
