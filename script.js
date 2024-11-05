function showSpecialtyDetails() {
    const specialty = document.getElementById('specialty-dropdown').value;
    const detailsDiv = document.getElementById('specialty-details');
    let content = '';

    switch (specialty) {
        case 'cardiac':
            content = `
                <h2>Cardiac Care</h2>
                <img src="cardiac.jpeg" alt="Cardiac Care">
                <p>Our Cardiac Care department offers comprehensive heart health services including diagnostics, treatment, and rehabilitation for heart conditions. Our expert team of cardiologists and state-of-the-art facilities ensure the best care for your heart.</p>
                <p><strong>Services:</strong> Cardiac surgery, angioplasty, echocardiograms, heart health counseling.</p>
                <p><strong>Specialists:</strong> Dr. A. Kumar, Dr. P. Mehta</p>
            `;
            break;
        case 'orthopedics':
            content = `
                <h2>Orthopedics</h2>
                <img src="orthopaedic.jpeg" alt="Orthopedics">
                <p>The Orthopedics department specializes in bone, joint, and muscle treatments. From sports injuries to joint replacement, our experts use advanced techniques to ensure effective recovery and pain relief.</p>
                <p><strong>Services:</strong> Joint replacement, fracture management, sports injury rehabilitation.</p>
                <p><strong>Specialists:</strong> Dr. R. Nair, Dr. S. Joshi</p>
            `;
            break;
        case 'neurology':
            content = `
                <h2>Neurology</h2>
                <img src="neurology.jpeg" alt="Neurology">
                <p>Our Neurology department provides expert care for neurological disorders. With advanced imaging and treatment options, we handle complex conditions affecting the brain and nervous system.</p>
                <p><strong>Services:</strong> Stroke management, epilepsy treatment, neurological diagnostics.</p>
                <p><strong>Specialists:</strong> Dr. V. Rao, Dr. M. Patil</p>
            `;
            break;
        case 'obgyn':
            content = `
                <h2>Obstetrics and Gynecology</h2>
                <img src="obsg.jpeg" alt="Obstetrics and Gynecology">
                <p>Our OB-GYN department offers a range of services from pregnancy care to women's health services. We provide personalized care and support for all stages of women’s health.</p>
                <p><strong>Services:</strong> Prenatal care, gynecological surgery, menopause management.</p>
                <p><strong>Specialists:</strong> Dr. S. Shah, Dr. L. Kapoor</p>
            `;
            break;
        case 'dermatology':
            content = `
                <h2>Dermatology</h2>
                <img src="dermatology.jpeg" alt="Dermatology">
                <p>Our Dermatology department provides expert care for skin, hair, and nail conditions. We use cutting-edge treatments and therapies to improve skin health and appearance.</p>
                <p><strong>Services:</strong> Acne treatment, skin cancer screening, cosmetic dermatology.</p>
                <p><strong>Specialists:</strong> Dr. N. Verma, Dr. T. Singh</p>
            `;
            break;
        default:
            content = '<p>Select a specialty to view details.</p>';
    }

    detailsDiv.innerHTML = content;
}