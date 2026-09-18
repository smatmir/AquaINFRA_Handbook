/**
 * Responsive tables.
 *
 * Two-column tables fit a phone screen on their own. Tables with three or more
 * columns do not, so they are marked up here with the header text of each cell
 * and stacked into label/value rows by the CSS below 560px. Without JavaScript
 * the tables stay plain tables and scroll inside their wrapper, as before.
 */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.table-wrapper table').forEach(function (table) {
        var headerRow = table.querySelector('thead tr') || table.querySelector('tr');
        if (!headerRow) return;

        var headers = Array.prototype.map.call(headerRow.children, function (cell) {
            return cell.textContent.trim();
        });
        if (headers.length < 3) return;

        table.classList.add('table--stackable');
        table.querySelectorAll('tbody tr').forEach(function (row) {
            Array.prototype.forEach.call(row.children, function (cell, i) {
                if (headers[i]) cell.setAttribute('data-label', headers[i]);
            });
        });
    });
});
