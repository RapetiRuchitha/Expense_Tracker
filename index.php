<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe App</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Catamaran:wght@200&family=Courgette&family=Dancing+Script:wght@700&family=Edu+TAS+Beginner:wght@700&family=Lato:wght@300;900&family=Mukta:wght@700&family=Mulish:wght@300&family=Open+Sans&family=PT+Sans:ital,wght@1,700&family=Poppins:wght@300&family=Raleway:wght@100&family=Roboto&family=Roboto+Condensed:wght@700&family=Roboto+Slab&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/f30fac2c61.js" crossorigin="anonymous"></script>
    <style>
        .logo {
            display: flex;
            align-items: center;
        }
        .logo img {
            width: 50px; /* Adjust the size as needed */
            height: 50px;
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <nav>
            <div class="logo">
                <img src="https://png.pngtree.com/template/20191015/ourmid/pngtree-chef-abstract-kitchener-cooky-icon-logo-image_317353.jpg" alt="Logo">
                <h1>Recipe Finder</h1>
            </div>
            <div class="searchBar">
                <input type="text" placeholder="Search Your Favourite..." id="input">
                <button id="search">Find</button>
            </div>
        </nav>
    
        <!-- view more Page -->
        <div class="content">
            <button class="close-btn">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div id="foodContent"></div>
        </div>
<br>
        <!-- card section -->
        <div class="head">
            <h1 id="head">Hey!!!...Welcome to Recipe Finder.<br></h1><br><br>
            <h5>Nothing brings people together like good food.....</h5>
        </div>
        <div class="card-container"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
