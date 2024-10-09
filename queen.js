document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const hoverText = document.querySelector('.hover-text');
    const gate = document.querySelector('.gate');
    const half = document.querySelector('.half');
    const input = document.createElement('input');
    
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter the secret word');
    
    container.appendChild(input);

    hoverText.addEventListener('mouseover', () => {
        hoverText.style.display = 'none';
        input.style.display = 'block';
    });

    // Event listener for input field when user presses 'Enter' key
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const value = input.value.toLowerCase();

            // Check if the value matches 'ball'
            if (value === 'november 24') {
                gate.classList.add('open');
                input.value = ''; // Clear input after correct value

                // Keep the window open and do not reset
                setTimeout(() => {
                    // half.style.display = 'none'; // Hide the gate after it opens
                    input.style.display = 'none'; // Hide the gate after it opens
                }, 1500);
                
            } 
            else {
                alert('imposter!!!!')
            }
        }
    });
});
