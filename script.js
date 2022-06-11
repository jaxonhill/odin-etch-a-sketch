function create_divs(num_of_divs) {
    const sketchpad_container = document.querySelector('#sketchpad-container');
    const styles = getComputedStyle(sketchpad_container);
    let sketch_height = sketchpad_container.clientHeight - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);
    let sketch_width = sketchpad_container.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);

    // Create the rows
    for (i = 0; i < num_of_divs; i++) {
        // Find the height for each row, the width would be same as sketch_width
        let row_height = Number(sketch_height) / num_of_divs;
        console.log(row_height);
        let row_width = Number(sketch_width);
        console.log(row_width);

        // Actually create the current row and append the row class here
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.height = `${row_height}px`;
        row.style.width = `${row_width}px`;

        // Add the number of squares in the row here
        for (j = 0; j < num_of_divs; j++) {
            // Get each square's width and height
            let square_width = row_width / num_of_divs;
            let square_height = row_height;

            // Create the current square and append the square class here
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.height = `${square_height}px`;
            square.style.width = `${square_width}px`;

            // Actually append current square as a child of the row
            row.appendChild(square);
        }

        // Finally append the row to the sketchpad container
        sketchpad_container.appendChild(row);
    }
}

create_divs(16);