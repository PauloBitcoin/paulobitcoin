
const playSVG = `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-width="2" d="M3,22.0000002 L21,12 L3,2 L3,22.0000002 Z M5,19 L17.5999998,11.9999999 L5,5 L5,19 Z M7,16 L14.1999999,12 L7,8 L7,16 Z M9,13 L10.8,12 L9,11 L9,13 Z"/>
  </svg>`;
const pauseSVG = `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path stroke-width="2" d="M3,21 L9,21 L9,3 L3,3 L3,21 Z M4,19 L8,19 L8,5 L4,5 L4,19 Z M5,17 L7,17 L7,7 L5,7 L5,17 Z M15,21 L21,21 L21,3 L15,3 L15,21 Z M16,19 L20,19 L20,5 L16,5 L16,19 Z M17,17 L19,17 L19,7 L17,7 L17,17 Z"/>
</svg>
`;
const rewindSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rewind-fill" viewBox="0 0 16 16">
  <path d="M8.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L8.404 7.304Z"/>
  <path d="M.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L.404 7.304Z"/>
</svg>`;
const forwardSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fast-forward-fill" viewBox="0 0 16 16">
  <path d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"/>
  <path d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"/>
</svg>`;

const repeatSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
  </svg>`;
const volumeHighSVG = `<?xml version="1.0" encoding="utf-8"?>
<!-- Uploaded to SVGRepo https://www.svgrepo.com -->
<!-- License: CC Attribution. Made by Amit Jakhu: https://github.com/amitjakhu/dripicons -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="92px" height="92px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
<path id="XMLID_749_" d="M37.7,4.3c-1.5-0.6-3.1-0.3-4.3,0.9L13.7,25H4c-2.2,0-4,1.8-4,4V63c0,2.2,1.8,4,4,4h9.8l19.7,19.8
	c0.8,0.8,1.8,1.2,2.8,1.2c0.5,0,0.9-0.1,1.4-0.3c1.5-0.6,2.3-2.1,2.3-3.7V8C40,6.4,39.2,4.9,37.7,4.3z M32,74.3L18.1,60.2
	c-0.8-0.8-1.6-1.2-2.7-1.2H8V33h7.4c1.1,0,1.9-0.4,2.7-1.2L32,17.7V74.3z M53.2,62.9c-0.8,0.9-1.9,1.3-3,1.3c-0.9,0-1.9-0.3-2.7-1
	c-1.6-1.5-1.8-4-0.3-5.6c10-11.2,1-22,0-23.2c-1.5-1.7-1.3-4.2,0.3-5.6c1.6-1.5,4.2-1.3,5.6,0.3C58.4,34.9,65.2,49.5,53.2,62.9z
	 M65.3,73.6c-0.8,0.9-1.9,1.3-3,1.3c-0.9,0-1.9-0.3-2.7-1c-1.6-1.5-1.8-4-0.3-5.6c19.7-22.1,0.8-43.7,0-44.6
	C57.8,22,58,19.5,59.6,18c1.6-1.5,4.2-1.3,5.7,0.3C65.5,18.6,89.7,46.3,65.3,73.6z M77.9,81.7c-0.8,0.9-1.9,1.3-3,1.3
	c-0.9,0-1.9-0.3-2.7-1c-1.6-1.5-1.8-4-0.3-5.6c11.2-12.6,14.7-26.6,10.2-41.5c-3.4-11.4-10.1-19-10.2-19.1c-1.5-1.6-1.3-4.2,0.3-5.6
	c1.6-1.5,4.2-1.3,5.7,0.3C78.2,10.7,109.4,46.4,77.9,81.7z"/>
</svg>
`;
const volumeMediumSVG = `<?xml version="1.0" encoding="utf-8"?>
<!-- Uploaded to SVGRepo https://www.svgrepo.com -->
<!-- License: CC Attribution. Made by Amit Jakhu: https://github.com/amitjakhu/dripicons -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="92px" height="92px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
<path id="XMLID_762_" d="M45.6,4.3c-1.5-0.6-3.2-0.3-4.3,0.9L21.7,25H12c-2.2,0-4,1.8-4,4V63c0,2.2,1.8,4,4,4h9.7l19.7,19.8
	c0.8,0.8,1.8,1.2,2.8,1.2c0.5,0,0.9-0.1,1.4-0.3c1.5-0.6,2.4-2.1,2.4-3.7V8C48,6.4,47.1,4.9,45.6,4.3z M40,74.3L26.1,60.2
	c-0.8-0.8-1.7-1.2-2.7-1.2H16V33h7.4c1.1,0,2-0.4,2.7-1.2L40,17.7V74.3z M61.1,62.9c-0.8,0.9-1.9,1.3-3,1.3c-0.9,0-1.9-0.3-2.7-1
	c-1.7-1.5-1.8-4-0.3-5.6c10-11.2,1-22,0-23.2c-1.5-1.7-1.3-4.2,0.4-5.6c1.7-1.5,4.2-1.3,5.6,0.3C66.3,34.9,73,49.5,61.1,62.9z
	 M73.1,73.6c-0.8,0.9-1.9,1.3-3,1.3c-0.9,0-1.9-0.3-2.7-1c-1.7-1.5-1.8-4-0.3-5.6c19.6-21.9,0.8-43.7,0-44.6
	c-1.5-1.7-1.3-4.2,0.3-5.6c1.7-1.5,4.2-1.3,5.6,0.3C73.4,18.6,97.5,46.3,73.1,73.6z"/>
</svg>
`;
const volumeLowSVG = `<?xml version="1.0" encoding="utf-8"?>
<!-- Uploaded to SVGRepo https://www.svgrepo.com -->
<!-- License: CC Attribution. Made by Amit Jakhu: https://github.com/amitjakhu/dripicons -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="92px" height="92px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
<path id="XMLID_775_" d="M53.7,4.3c-1.5-0.6-3.1-0.3-4.3,0.9L29.8,25H20c-2.2,0-4,1.8-4,4V63c0,2.2,1.8,4,4,4h9.8l19.8,19.8
	c0.8,0.8,1.8,1.2,2.8,1.2c0.5,0,0.8-0.1,1.3-0.3c1.5-0.6,2.3-2.1,2.3-3.7V8C56,6.4,55.2,4.9,53.7,4.3z M48,74.3L34.1,60.2
	c-0.8-0.8-1.6-1.2-2.6-1.2H24V33h7.4c1.1,0,1.9-0.4,2.6-1.2L48,17.7V74.3z M69.3,62.9c-0.8,0.9-1.9,1.3-3,1.3c-1,0-1.9-0.3-2.7-1
	c-1.6-1.5-1.8-4-0.3-5.6c10.3-11.5,0.4-22.7,0-23.2c-1.5-1.6-1.3-4.2,0.3-5.6c1.6-1.5,4.2-1.3,5.6,0.3
	C74.5,34.9,81.3,49.5,69.3,62.9z"/>
</svg>
`;
const muteSVG = `<?xml version="1.0" encoding="utf-8"?>
<!-- Uploaded to SVGRepo https://www.svgrepo.com -->
<!-- License: CC Attribution. Made by Amit Jakhu: https://github.com/amitjakhu/dripicons -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="92px" height="92px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
<path id="XMLID_788_" d="M40.3,4.3c-1.5-0.6-3.3-0.2-4.5,0.9L16.5,25H7c-2.2,0-4,1.8-4,4V63c0,2.2,1.8,4,4,4h9.5l19.2,19.8
	c0.8,0.8,1.8,1.2,2.9,1.2c0.5,0,1.2-0.1,1.7-0.3c1.5-0.6,2.7-2.1,2.7-3.7V8C43,6.4,41.8,4.9,40.3,4.3z M35,74.2L21.2,60.2
	c-0.8-0.8-2-1.2-3.1-1.2H11V33h7.2c1.1,0,2.3-0.5,3.1-1.2L35,17.8V74.2z M87.9,58c1.5,1.6,1.5,4.1-0.1,5.7C87,64.4,86,64.8,85,64.8
	c-1,0-2.1-0.4-2.9-1.2L70.6,51.7L59.1,63.6c-0.8,0.8-1.8,1.2-2.9,1.2c-1,0-2-0.4-2.8-1.1c-1.6-1.5-1.6-4.1-0.1-5.7L65,46L53.4,34
	c-1.5-1.6-1.5-4.1,0.1-5.7c1.6-1.5,4.1-1.5,5.7,0.1l11.5,11.8l11.5-11.8c1.5-1.6,4.1-1.6,5.7-0.1c1.6,1.5,1.6,4.1,0.1,5.7L76.2,46
	L87.9,58z"/>
</svg>
`;
const captionsSVG = `<!-- License: CC Attribution. Made by FortAwesome: https://github.com/FortAwesome/Font-Awesome -->
<svg width="512px" height="512px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM218.1 287.7c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.8-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2.1 48 51.1 70.5 92.3 32.6zm190.4 0c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.5 56.9-172.7 32.1-172.7-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7L420 222.2c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6z"/></svg>`;
const settingsSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
  </svg>`;
const fullscreenSVG = `<!-- License: MIT. Made by Bootstrap: https://github.com/twbs/icons -->
<svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrows-fullscreen">
  <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
</svg>`;
const exitfullscreenSVG = `<!-- License: MIT. Made by Bootstrap: https://github.com/twbs/icons -->
<svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-fullscreen-exit">
  <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
</svg>`;

const addButton = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>`;
const removeButton = `  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
</svg>`;


document.addEventListener("DOMContentLoaded", function () {


    const video = document.querySelector('video');

    if (video) {
        // cria as divs
        const container1 = document.createElement('div');
        const container2 = document.createElement('div');
        const container3 = document.createElement('div');
        // adiciona a classe para o primeiro container
        container1.classList.add("bitcast_wrapper");
        container2.classList.add("bitcast", "bitcast_video");
        container3.classList.add("bitcast_container");
        // adiciona a tag video dentro do primeiro container
        container1.appendChild(video);
        // Adiciona a div alert como filha do container1
        const alert = document.createElement('div');
        alert.classList.add('alert', 'hidden');
        container1.appendChild(alert);
        //
        const rewindButton = document.createElement('button');
        rewindButton.classList.add('rewind-10-seconds');
        container1.appendChild(rewindButton);
        //
        const forwardButton = document.createElement('button');
        forwardButton.classList.add('forward-10-seconds');
        container1.appendChild(forwardButton);
        //          
        const playLarge = document.createElement("button");
        playLarge.setAttribute("data-bitcast", "play");
        playLarge.classList.add('bitcast_play-large');
        container1.appendChild(playLarge);

        const span = document.createElement("span");
        span.classList.add("class");
        span.innerHTML = playSVG;
        playLarge.appendChild(span);



        //adiciona o primeiro container dentro do segundo container
        container2.appendChild(container1);
        //adiciona o terceiro container dentro do segundo container
        container3.appendChild(container2);
        //adiciona o segundo container dentro do documento
        //document.body.appendChild(container3);

        const targetDiv = document.querySelector('.player-container');
        targetDiv.appendChild(container3);


        const bitcastWrapper = document.querySelector('.bitcast_wrapper');
        bitcastWrapper.insertAdjacentHTML('afterend', `  
    


        <div class="bitcast_controls">
        <button type="button" data-bitcast="play" aria-label="Play">
            <span class="bitcast_sr-only">Play/Pause</span>
        </button>


        <span class="bitcast_progress">
            <label for="seek" class="bitcast_sr-only">Seek</label>
            <input id="seek" class="bitcast_progress-seek" type="range" min="0" max="100" value="0" data-bitcast="seek"
                step="0.1">
            <progress class="bitcast_progress-played" max="100" value="0" role="presentation"></progress>
            <progress class="bitcast_progress-buffer" max="100" value="0"><span>3.52</span>% buffered</progress>

            <span class="bitcast_tooltip  position-time">00:00</span>

            <span class="thumbnail">
                <img id="thumbnail_img" src="https://wallpaperaccess.com/full/1914455.jpg">
                <span class="thumbnail_time">00:00</span>
            </span>
        </span>


        <span class="bitcast_time">
            <span class="bitcast_sr-only">Current time</span>
            <span class="bitcast_time-current">00:00</span>
        </span>


        <button type="button" data-bitcast="mute" aria-pressed="false">
            <span class="bitcast_sr-only">Toggle Mute</span>
        </button>


        <span class="bitcast_volume">
            <label for="volume" class="bitcast_sr-only">Volume</label>
            <input id="volume" class="bitcast_volume-input" type="range" min="0" max="10" value="10"
                data-bitcast="volume" step="0.1" ">
    <progress class=" bitcast_volume-display" max="10" value="10" role="presentation"></progress>
        </span>


        <button type="button" data-bitcast="captions" aria-pressed="true">
            <span class="bitcast_sr-only">Toggle Captions</span>

        </button>












        <button aria-haspopup="true" aria-controls="bitcast_settings" aria-expanded="false" type="button"
            class="bitcast_control" data-bitcast="settings" aria-pressed="false">
            <span class="settings-icon"></span>
            <span class="bitcast_sr-only">Settings</span>
        </button>






    



































        






        <div class="bitcast_menu_container closed_menu" id="bitcast-settings-7180">




        <button class="bitcast_control show-quality hidden" data-bitcast="quality" type="button" id="toggleQuality"
            aria-pressed="false" aria-controls="contentQuality">

            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-sliders" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z" />
                </svg>
            </span>
            
            Qualidade
            
            </button>



        <div id="contentQuality" aria-hidden="true">

            <div role="menu">

                <button class="bitcast_control hide-quality" data-bitcast="quality" type="button" id="toggleQuality"
                    aria-pressed="true" aria-controls="contentQuality">
                    
                    

            
            <span>Voltar</span>
            
            </button>



                <button data-bitcast="quality" type="button" role="menuitemradio" class="bitcast_control"
                    aria-checked="true" value="1080">
                    <span class="quality_value">1080p</span>
                        <span class="bitcast_badge">HD</span>
                   
                </button>

                <button data-bitcast="quality" type="button" role="menuitemradio" class="bitcast_control"
                    aria-checked="false" value="720">
                    <span class="quality_value">720p</span>
                        <span class="bitcast_badge">HD</span>
                    
                </button>

                <button data-bitcast="quality" type="button" role="menuitemradio" class="bitcast_control"
                    aria-checked="false" value="480">
                    <span class="quality_value">480p</span>
              
                </button>


                <button data-bitcast="quality" type="button" role="menuitemradio" class="bitcast_control"
                    aria-checked="false" value="0">
                    <span class="quality_value">Default</span>
                       
                   
                </button>



            </div>
        </div>






        <button class="bitcast_control bitcast_control-forward show-speed" type="button" id="toggleSpeed" aria-pressed="false"
            aria-controls="contentSpeed">


            <span>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-speedometer2" viewBox="0 0 16 16">
                    <path
                        d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                    <path fill-rule="evenodd"
                        d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
                </svg>
                
                </span>


            Velocidade
        </button>



     





        <div id="contentSpeed" aria-hidden="true">

            <div role="menu"> 
                
                <button class="bitcast_control bitcast_control-forward  hide-speed" type="button" id="toggleSpeed" aria-pressed="true"
            aria-controls="contentSpeed">

           

            <span style="display: block;">Voltar</span>
        </button>


                <button data-bitcast="speed" type="button" role="menuitemradio" class="bitcast_control"
                    aria-checked="false" value="0.25"><span>0.25x</span></button>

                <button data-bitcast="speed" type="button" role="menuitemradio" class="bitcast_control"
                    aria-checked="false" value="0.5"><span>0.5x</span></button>

                <button data-bitcast="speed" type="button" role="menuitemradio" class="bitcast_control"
                    aria-checked="true" value="1"><span>Normal</span></button>

                <button data-bitcast="speed" type="button" role="menuitemradio" class="bitcast_control"
                    aria-checked="false" value="2"><span>2x</span></button>

                <button data-bitcast="speed" type="button" role="menuitemradio" class="bitcast_control"
                    aria-checked="false" value="3"><span>3x</span></button>

             
            </div>
        </div>
    </div>












        







        <button type="button" data-bitcast="fullscreen" aria-pressed="false">
            <span class="bitcast_sr-only">Toggle Fullscreen</span>
        </button>

    </div>









    




        `);



























        // Toast / Alertas

        let timeAlert;

        function showAlert(message) {
            clearTimeout(timeAlert);
            var alert = document.querySelector('.alert');
            alert.innerHTML = message;
            alert.classList.remove('hidden');
            setTimeout(function () {
                alert.classList.add('hidden');
            }, 2000);

        }




















        // Menu controls

        const settingsButton = document.querySelector('[data-bitcast="settings"]');
        const modal = document.querySelector('.bitcast_menu_container');

        settingsButton.addEventListener('click', function () {
            modal.classList.toggle("closed_menu");
        });






        // Menu controls
        // show 1 - hide 1
        const show1Yes = document.querySelector('.show-quality');
        const hide1Yes = document.querySelector('.hide-quality');
        const target1 = document.querySelector('#contentQuality');

        show1Yes.addEventListener('click', function () {
            target1.style.display = 'flex';
            show1Yes.style.display = 'none';
            hide1Yes.style.display = 'flex';
            show2Yes.style.display = 'none';
        });

        hide1Yes.addEventListener('click', function () {
            target1.style.display = 'none';
            show1Yes.style.display = 'flex';
            hide1Yes.style.display = 'none';
            show2Yes.style.display = 'flex';
        });

        // show 2 - hide 2
        const show2Yes = document.querySelector('.show-speed');
        const hide2Yes = document.querySelector('.hide-speed');
        const target2 = document.querySelector('#contentSpeed');

        show2Yes.addEventListener('click', function () {
            target2.style.display = 'flex';
            show2Yes.style.display = 'none';
            hide2Yes.style.display = 'flex';
            show1Yes.style.display = 'none';
        });

        hide2Yes.addEventListener('click', function () {
            target2.style.display = 'none';
            show2Yes.style.display = 'flex';
            hide2Yes.style.display = 'none';
            show1Yes.style.display = 'flex';
        });


























        var captionsButton = document.querySelector('button[data-bitcast="captions"]');
        captionsButton.innerHTML = captionsSVG;
        var svg = captionsButton.querySelector('svg');

        var mediaPlayer = document.getElementById("bitcast");


        //const mediaPlayer = document.querySelector('#mediaPlayer');
        if (mediaPlayer) {
            mediaPlayer.addEventListener("loadeddata", function () {



                //Captions







                mediaPlayer.addEventListener("loadeddata", function () {
                    var track = mediaPlayer.querySelector("track[src]");
                    if (!track) {
                        captionsButton.style.display = "none";
                    } else {
                        svg.style.fill = "rgb(255 255 255 / 50%)";
                        let timeCaption;
                        captionsButton.addEventListener("click", function () {
                            clearTimeout(timeCaption);

                            mediaPlayer.textTracks[0].mode = mediaPlayer.textTracks[0].mode === "showing" ? "hidden" : "showing";
                            if (mediaPlayer.textTracks[0].mode === "showing") {
                                svg.style.fill = "#fff";
                                showAlert(track.label);


                            } else if (mediaPlayer.textTracks[0].mode === "hidden") {
                                svg.style.fill = "rgb(255 255 255 / 50%)";
                                showAlert('Desativado');



                            }


                        });

                    }
                });







            });
        }





































        // Velocidade



        const speedButtons = document.querySelectorAll('[data-bitcast="speed"]');
        let videoID = document.getElementById('bitcast'); // Substitua 'myVideo' pelo id do seu vídeo

        for (let button of speedButtons) {
            button.addEventListener('click', function () {
                for (let otherButton of speedButtons) {
                    otherButton.setAttribute('aria-checked', 'false');
                }
                this.setAttribute('aria-checked', 'true');
                let speed = this.getAttribute('value');
                videoID.playbackRate = speed;
            });
        }























    }










































    // Variáveis


    const currentTime = document.querySelector(".bitcast_time-current");
    rewindButton = document.querySelector('.rewind-10-seconds');
    rewindButton.innerHTML = rewindSVG;
    forwardButton = document.querySelector('.forward-10-seconds');
    forwardButton.innerHTML = forwardSVG;

    const volumeButton = document.querySelector('[data-bitcast="mute"]');
    const volumeInput = document.querySelector('.bitcast_volume-input');
    volumeButton.innerHTML = volumeHighSVG;

    settingsButton = document.querySelector('.bitcast_control');
    settingsButton.innerHTML = settingsSVG;




    const bitcast = document.querySelector('video');

    const tooltip = document.querySelector('.bitcast_tooltip');
    const thumbnail = document.querySelector('.thumbnail');
    const thumbTime = document.querySelector('.thumbnail_time');



    // Formate time function

    function formatTime(time) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);
        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        } else {
            return `${minutes}:${seconds.toString().padStart(2, "0")}`;
        }
    }

    //this function can be used in any other function or event listener
    currentTime.innerHTML = formatTime(video.currentTime);




































    // Media controls PLay/Pause

    const playSmall = document.querySelector('button[data-bitcast="play"]:not(.bitcast_play-large)');
    playSmall.innerHTML = playSVG;
    const playLarge = document.querySelector('.bitcast_play-large');
    playLarge.innerHTML = playSVG;
    const videoContainer = document.querySelector('.bitcast_video');

    function togglePlay() {
        if (video.paused) {
            video.play();
            playSmall.innerHTML = pauseSVG;
            playLarge.classList.add("is_playing");
        } else {
            video.pause();
            playSmall.innerHTML = playSVG;
            playLarge.classList.remove("is_playing");
        }
    }


    bitcast.addEventListener('click', togglePlay);
    playSmall.addEventListener('click', togglePlay);
    playLarge.addEventListener('click', togglePlay);

    let isRepeat = false

    video.addEventListener('ended', () => {
        if (isRepeat) {
            video.play();
            playSmall.innerHTML = pauseSVG;
            playLarge.innerHTML = playSVG;
        } else {
            playSmall.innerHTML = repeatSVG;
            playLarge.innerHTML = playSVG;
        }
    });



    //esconde os controles
    let timeoutId;

    videoContainer.addEventListener("mousemove", showControls);
    videoContainer.addEventListener("touchmove", showControls);

    function showControls() {
        clearTimeout(timeoutId);
        videoContainer.classList.remove("bitcast_hide_controls");
        //playLarge.classList.remove("bitcast_hide_controls");
        timeoutId = setTimeout(() => {
            videoContainer.classList.add("bitcast_hide_controls");
        }, 2000);
    }







































    // Rewind / Forward 10 seconds

    rewindButton.addEventListener('dblclick', () => {
        video.currentTime -= 10;
        rewindButton.classList.add("clicked");
        setTimeout(() => {
            rewindButton.classList.remove("clicked");
        }, 500);
    });

    rewindButton.addEventListener('click', () => {
        rewindButton.classList.add("clicked");
        setTimeout(() => {
            rewindButton.classList.remove("clicked");
        }, 500);
    });


    forwardButton.addEventListener('dblclick', () => {
        video.currentTime += 10;

        forwardButton.classList.add("clicked");
        setTimeout(() => {
            forwardButton.classList.remove("clicked");
        }, 500);

    });

    forwardButton.addEventListener('click', () => {
        forwardButton.classList.add("clicked");
        setTimeout(() => {
            forwardButton.classList.remove("clicked");
        }, 500);
    });




    // Mobile 

    let rewindClicks = 0;
    let forwardClicks = 0;

    rewindButton.addEventListener('touchstart', () => {
        rewindClicks++;
        setTimeout(() => {
            rewindClicks = 0;
        }, 1000);

        if (rewindClicks === 2) {
            video.currentTime -= 10;
            rewindButton.classList.add("clicked");
            setTimeout(() => {
                rewindButton.classList.remove("clicked");
            }, 500);
        }
    });

    forwardButton.addEventListener('touchstart', () => {
        forwardClicks++;
        setTimeout(() => {
            forwardClicks = 0;
        }, 1000);

        if (forwardClicks === 2) {
            video.currentTime += 10;
            forwardButton.classList.add("clicked");
            setTimeout(() => {
                forwardButton.classList.remove("clicked");
            }, 500);
        }
    });



















    //Input, progress and current time
    const seekBar = document.getElementById("seek");

    bitcast.addEventListener("timeupdate", function () {
        currentTime.textContent = formatTime(bitcast.currentTime);
    });

    bitcast.addEventListener("timeupdate", () => {
        const value = (100 / bitcast.duration) * bitcast.currentTime;
        seekBar.value = value;
    });

    bitcast.addEventListener("loadedmetadata", () => {
        seekBar.value = 0;
    });


    seekBar.addEventListener("input", () => {
        let time = bitcast.duration * (seekBar.value / 100);
        if (time < 0) {
            time = 0;
        }
        if (time > bitcast.duration) {
            time = bitcast.duration;
        }
        bitcast.currentTime = time;

    });












    seekBar.addEventListener('mousemove', handleMouseMove);

    function handleMouseMove(event) {
        const rect = seekBar.getBoundingClientRect();
        let position = event.offsetX / rect.width;
        position = Math.max(0, position);
        position = Math.min(1, position);
        const time = bitcast.duration * position;
        handleMouseMoveActions(time, event, rect);
    }

    function handleMouseMoveActions(time, event, rect) {
        handleTooltipVisibility(time, event, rect);
        handlethumbnailVisibility(time, event, rect);
    }

    function handleTooltipVisibility(time, event, rect) {

        let tooltipPosition = event.offsetX;
        if (tooltipPosition > rect.width) {
            tooltipPosition = rect.width;
        }
        if (tooltipPosition < 0) {
            tooltipPosition = 0;
        }
        tooltip.innerText = formatTime(time);
        tooltip.style.left = `${tooltipPosition}px`;
        tooltip.classList.add('bitcast_tooltip-visible');
    }


    function handlethumbnailVisibility(time, event, rect) {

        let thumbnailPosition = event.offsetX;
        if (thumbnailPosition > rect.width) {
            thumbnailPosition = rect.width;
        }
        if (thumbnailPosition < 0) {
            thumbnailPosition = 0;
        }
        thumbTime.innerText = formatTime(time);
        thumbnail.style.left = `${thumbnailPosition}px`;
        thumbnail.classList.add('thumbnail-visible');
    }

    seekBar.addEventListener('mouseout', () => {
        tooltip.classList.remove('bitcast_tooltip-visible');
        thumbnail.classList.remove('thumbnail-visible');
    });





















    seekBar.addEventListener("touchmove", handleTouchMove);

    function handleTouchMove(event) {
        const rect = seekBar.getBoundingClientRect();
        let position = event.touches[0].clientX - rect.left;
        position = position / rect.width;
        position = Math.max(0, position);
        position = Math.min(1, position);
        const time = bitcast.duration * position;
        handleTouchMoveActions(time, event, rect);
    }

    function handleTouchMoveActions(time, event, rect) {
        handleTouchTooltipVisibility(time, event, rect);
        handleTouchthumbnailVisibility(time, event, rect);
    }

    function handleTouchTooltipVisibility(time, event, rect) {
        tooltip.innerText = formatTime(time);
        let tooltipPosition = event.touches[0].clientX - rect.left;
        if (tooltipPosition > rect.width) {
            tooltipPosition = rect.width;
        }
        if (tooltipPosition < 0) {
            tooltipPosition = 0;
        }
        tooltip.style.left = `${tooltipPosition}px`;
        tooltip.classList.add('bitcast_tooltip-visible');
    }

    function handleTouchthumbnailVisibility(time, event, rect) {
        thumbTime.innerText = formatTime(time);
        let thumbnailPosition = event.touches[0].clientX - rect.left;
        if (thumbnailPosition > rect.width) {
            thumbnailPosition = rect.width;
        }
        if (thumbnailPosition < 0) {
            thumbnailPosition = 0;
        }
        thumbnail.style.left = `${thumbnailPosition}px`;
        thumbnail.classList.add('thumbnail-visible');
    }



    seekBar.addEventListener('touchend', () => {
        tooltip.classList.remove('bitcast_tooltip-visible');
        thumbnail.classList.remove('thumbnail-visible');
    });














    const progressBar = document.querySelector('.bitcast_progress-played');
    // Update the value of the progress bar when the value of the seek bar changes
    seekBar.addEventListener('input', function () {
        progressBar.value = this.value;
    });

    video.addEventListener('timeupdate', function () {
        if (video.duration) {
            progressBar.value = (video.currentTime / video.duration) * 100;
        }
    });

    // Update the value of the seek bar when the video is playing
    video.addEventListener('timeupdate', function () {
        seekBar.value = (video.currentTime / video.duration) * 100;
    });

    const bufferBar = document.querySelector('.bitcast_progress-buffer');
    const bufferSpan = bufferBar.querySelector('span');

    video.addEventListener('progress', function () {
        if (video.buffered.length > 0 && video.duration) {
            const buffered = (video.buffered.end(0) / video.duration) * 100;
            bufferBar.value = buffered;
            bufferSpan.innerHTML = `${buffered.toFixed(0)}% buffered`;
        }
    });
















    // Volume Controls


    const volumeProgress = document.querySelector('.bitcast_volume-display');
    volumeButton.addEventListener('click', togglePrevious);
    var previousVolume = volumeInput.value;

    function togglePrevious() {
        if (volumeInput.value == 0) {
            volumeInput.value = previousVolume;
            video.muted = false;
        } else {
            previousVolume = volumeInput.value;
            volumeInput.value = 0;
            video.muted = true;
        }
        updateVolume();
    }


    volumeInput.addEventListener('input', updateVolume);

    if (!localStorage.getItem('volumeSVG')) {
        localStorage.setItem('volumeSVG', volumeHighSVG);
    }
    var storedSVG = localStorage.getItem('volumeSVG');
    if (storedSVG == muteSVG) {
        volumeInput.value = 0;
        video.muted = true;
        volumeButton.setAttribute("aria-pressed", "true");
        volumeButton.innerHTML = muteSVG;
    } else if (storedSVG == volumeLowSVG) {
        volumeInput.value = 1;
        video.muted = false;
        volumeButton.innerHTML = volumeLowSVG;
    } else if (storedSVG == volumeMediumSVG) {
        volumeInput.value = 5;
        video.muted = false;
        volumeButton.innerHTML = volumeMediumSVG;
    } else {
        volumeInput.value = 10;
        video.muted = false;
        volumeButton.innerHTML = volumeHighSVG;
    }





    function updateVolume() {
        var volume = volumeInput.value;
        volumeProgress.value = volume;

        if (volume == 0) {
            video.muted = true;
            volumeButton.setAttribute("aria-pressed", "true");
            volumeButton.innerHTML = muteSVG;
            localStorage.setItem('volumeSVG', muteSVG);
        } else {
            volumeButton.setAttribute("aria-pressed", "false");

            if (volume > 0 && volume <= 3) {
                video.muted = false;
                volumeButton.innerHTML = volumeLowSVG;
                localStorage.setItem('volumeSVG', volumeLowSVG);
            } else if (volume > 3 && volume <= 7) {
                volumeButton.innerHTML = volumeMediumSVG;
                localStorage.setItem('volumeSVG', volumeMediumSVG);
            } else {
                volumeButton.innerHTML = volumeHighSVG;
                localStorage.setItem('volumeSVG', volumeHighSVG);

            }
        }

    }


    let volume = localStorage.getItem('volume');
    if (!volume) {
        volume = 1;
    }
    video.volume = volume;
    volumeInput.value = volume * 10;
    volumeProgress.value = volume * 10;


    volumeInput.addEventListener('input', e => {
        volume = e.target.value / 10;
        video.volume = volume;
        localStorage.setItem('volume', volume);
        volumeProgress.value = e.target.value;

    });
    volumeProgress.addEventListener('input', e => {
        localStorage.setItem('volumeProgressValue', e.target.value);
    });





















    //Full Screen Mode

    const fullscreenButton = document.querySelector('[data-bitcast="fullscreen"]');
    fullscreenButton.innerHTML = fullscreenSVG;


    const container = document.querySelector('.bitcast_container');

    fullscreenButton.addEventListener('click', function () {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            container.requestFullscreen();
        }
    });

    document.addEventListener("fullscreenchange", function () {
        if (document.fullscreenElement) {
            fullscreenButton.innerHTML = exitfullscreenSVG;
        } else {
            fullscreenButton.innerHTML = fullscreenSVG;
        }
    });
































































});




