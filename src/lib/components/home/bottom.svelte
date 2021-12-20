<section class="home-bottom flex flex-col lg:flex-row space-y-4 justify-between items-center">
    <div class="info flex flex-col space-y-8 mt-12 lg:mt-0">
        <h2 class="capitalize text-2xl lg:text-4xl text-center lg:text-left font-me"> Most easiest way to 
            get <span class="text-yellow"> Passive </span>  Income. </h2>
        <p class="text-md lg:text-xl font-ps"> KIOO reflect token is an investment tool that simplifies and promotes access to passive income without the complexity of DeFi.
            Our main goal is to develop the community by implementing the KiooVerse which will implement NFT, games and investment on projects.
        </p>
        <div>
            <button class="capitalize font-me text-sm lg:text-lg border-solid border-white" > learn more </button>
        </div>
    </div>
    <div class="img-container order-first lg:order-last">
        <img src="/images/Rectangle.png" alt="rectangle">
    </div>
</section>

<style>
    h2 {
        max-width: 17ch;
    }

    p {
        max-width: 35ch;
        line-height: 2rem;
    }

    button {
        padding: 1em;
        padding-inline: 1.5em;
    }

    div.img-container {
        position: relative;
    }

    div.img-container::before, div.img-container::after {
        content: "";
        width: 5rem;
        height: 2rem;
        background-color: rgba(255,255,255,0.5);
        bottom: 0;
        position: absolute;
        transform: translateX(-30%) rotateZ(45deg);
    }

    div.img-container::before {
        left: 0px;
    }

    div.img-container::after {
        right: 0px;
        transform: translateX(30%) rotateZ(-45deg);
    }

</style>