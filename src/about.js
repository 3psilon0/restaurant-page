export default function(){
    const aboutDiv = document.createElement('div');
    aboutDiv.className = 'about';
    aboutDiv.innerHTML = `
        <p class="about-title">About Us</p>
        <p class="about-text">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique finibus dui, ut vulputate quam egestas vitae. Pellentesque et elit elit. Nunc erat felis, tempor eu ligula id, pharetra congue ante. Nulla consectetur purus mollis nibh tincidunt maximus. Aenean massa nisi, volutpat ut fermentum a, fermentum non ex. Vivamus rutrum leo nec metus hendrerit, ut ultrices leo congue. Cras in gravida magna, vitae consequat ex. Maecenas ornare sapien vitae suscipit ullamcorper. Phasellus nisi urna, tempus in velit in, commodo ultrices ipsum. Phasellus vitae commodo mauris, a feugiat leo. Maecenas sed dignissim massa. Aliquam laoreet mi quis interdum tristique. Morbi porttitor viverra odio. Curabitur vehicula auctor dolor et fermentum. Suspendisse efficitur diam a elit facilisis euismod.

Duis iaculis feugiat iaculis. Quisque euismod blandit vehicula. Donec pulvinar lobortis maximus. Donec facilisis sem id tellus venenatis tristique. Aliquam in leo vel lorem vehicula dictum. Ut porta luctus nunc nec consectetur. Nunc vitae ligula iaculis, laoreet odio non, molestie tellus. 
        </p>
    `;
    return aboutDiv;
};