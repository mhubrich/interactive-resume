- [Interactive Resume](#interactive-resume)
  * [Prerequisites](#prerequisites)
  * [Getting Started](#getting-started)
    + [Vanilla JS](#vanilla-js)
      - [Steps](#steps)
      - [Generate Map Position Using `Helper.html`](#generate-map-position-using--helperhtml-)
      - [Configuration Options](#configuration-options)
      - [Mapbox Studio Style Configuration](#mapbox-studio-style-configuration)
  * [Deployment](#deployment)
  * [Built With](#built-with)
  * [Authors](#authors)
  * [License](#license)


# Interactive Resume
This template is designed to accelerate building out an interactive resume that features a map view. The primary input is a resume broken into sections (`chapters`), each hooked to a particular view of a map.

Optionally, you can input a custom Mapbox Style with layers styled in Studio and toggle the layer's opacity.

The output is an HTML and JavaScript file. These outputs can be hosted on any web-accessible location, with no extra code or infrastructure required. Note that embedding the output as an iFrame in another page will not work as expected. The scroll-driven interface requires the full page.

This repository is based on (and was forked from) the [Mapbox Storytelling](https://github.com/mapbox/storytelling). Our main contributions are:
- More flexible width of the chapter containers (small, medium, large and full width).
- Support of multiple images in one container.
- Minor changes to theme styling.

## Prerequisites
No coding experience is required. If you are planning to include some custom map layers, you will need some familiarity with [Mapbox Studio](https://studio.mapbox.com).

To configure and publish a resume, you will need:
- A Mapbox [access token](https://docs.mapbox.com/help/glossary/access-token). Sign up for a free account at [mapbox.com](https://www.mapbox.com/signup/) to get one.

- A text editor. Atom, Sublime Text, and Visual Studio Code are all fine choices.

- A place to publish your work. Any service that hosts static files that can be accessed with a browser will do.

- A resume. For best results it is beneficial if your resume contains milestones in different cities or even countries.

- Attention to detail. The configuration file does require specific syntax and punctuation. Braces, brackets, commas, and quotes are important. Follow the `config.js.template` for guidance. Some familiarity with [JSON]('https://www.copterlabs.com/json-what-it-is-how-it-works-how-to-use-it/') is recommended.

- Optionally, some spatial data in your Mapbox map. The template has options to include layer names to show and hide the data as the story sections transition. You may want to highlight a neighborhood, or show satellite data from two different times.

The template does not rely on any particular CSS framework, fonts, or images. There are some basic styles in the `head` of the HTML file that can be changed, so feel free to adapt and add to these to match your site and story brand.

![example resume screen capture](assets/maryammirzakhani.gif)

## Getting Started

- Download this repository as a ZIP file using the button above, and unzip it. If you are using `git`, clone this repository.

### Vanilla JS

In your local copy of this repository (the unzipped file you downloaded), navigate to the `src/vanilla-js/` directory.

Make a copy of `config.js.template` and name it `config.js`. Open the new `config.js` file in your text editor.

#### Steps

1. **Add a Mapbox access token.** A good practice is to [create a separate](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/#creating-and-managing-access-tokens) token per map to be able to track traffic to your different maps.

2. **Choose whether or not to display a marker** at the center of each map location.

3. **Choose a theme for the resume**. There are `light` and `dark` options.

4. **Choose where your story should be aligned over the map**. Options are `left` or `right`.

```
{
    accessToken: 'YOUR_ACCESS_TOKEN',
    showMarkers: false,
    alignment: 'left',
    documentTitle: 'The title of the HTML document',
    title: 'Resume Title Goes Here',
    subtitle: 'A subtitle going into more detail goes here',
    byline: 'Your name',
    footer: 'Could be a link to your website or LinkedIn profile',
    chapters: [...]
  }
```

5. **Add as many `chapters` in your template as needed.** You'll need a `,` between each section, but no comma at the end. Here is what a `chapter` looks like:

```
        {
            id: 'identifier',
            title: 'Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your resume.',
            width: 'Can be any of: small, medium, large, full.'
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
```

7. **Fill out your sections as needed.**  Give each section a unique name in the section `id` property. This will become the HTML `div` `id`, so avoid spaces in the name. The `title`, `image`, `description` and `width` properties are optional. The `description` supports HTML tags.

8. If you have an image that goes with that section of the resume, add the path to the image in the `image` property. For multiple images (side by side) you can add a list of dictionaries: `[{path: image1.jpg, desc: 'First Description'}, {path: image2.jpg, desc: 'Second Description'}]`.

9. For `location`, you can use the `helper.html` file to help you determine the map's position. This tool prints the location settings of the map on the screen in a format ready for copy/paste into the template.

10. Repeat until you have the location entered for each of your sections.

11. Open `index.html` in a browser, and scroll. Voila!

#### Generate Map Position Using `Helper.html`

Using the `helper.html` file, you can search for places, zoom, pan, tilt, and rotate the map to get the desired map position (_Hint_: To tilt and rotate the map, right-click and drag the map).

Notice the location parameters are updated in the upper left corner with everytime you move the map. You can copy the location definition from that page into the `config.js` `location` property section.

There is also a hosted version of this file at [https://demos.mapbox.com/location-helper/](https://demos.mapbox.com/location-helper/)

![location helper screen capture](assets/locationhelper.gif)

#### Configuration Options

Note: items in bold are **required**.

**`accessToken`**: Your Mapbox access token.

**`showMarkers`**: This controls whether markers are shown at the centerpoint of each chapter. If `true`, the map will display a default blue, inverted-teardrop icon.

**`theme`**: Two basic themes (light and dark) are available.

**`alignment`**: This defines where the sections should appear over the map. Options are `left` and `right`.

`documentTitle`: The title of the HTML document which is displayed by your browser. (Optional)

`title`: The title of the overall resume. (Optional)

`subtitle`: A subtitle for the resume. (Optional)

`byline`: Credit the author of the resume. (Optional)

`footer`: Citations, credits, etc. that will be displayed at the bottom of the resume.

**`chapters`**: This contains all of the resume content and map controls for each section of the story. _Array of objects_

- **`id`**: A slug-style ID for the chapter. This is read by the JavaScript driving the app and is assigned as an HTML `id` for the `div` element containing the rest of the story. A best-practice format would be to use kebab case, like `my-resume-chapter-1`.
- `title`: The title of the section, displayed in an `h3` element.
- `image`: The path to an image to display in this section. For multiple images (side by side) you can add a list of dictionaries: `[{path: image1.jpg, desc: 'First Description'}, {path: image2.jpg, desc: 'Second Description'}]`.
- `description`: The main story content for the section. This should be aligned with what the reader is seeing on the map. In the vanilla version, this field will render as HTML. Images, links, and other items can be included as HTML.
- `width`: The width of the section. Can be any of `small`, `medium`, `large`, `full` (default will be `small`).
- **`location`**: Details about the map display and camera view.
    - **`center`**: Center coordinates of the map, as `longitude, latitude`
    - **`zoom`**: Zoom level of the map.
    - **`pitch`**: Angle of the map view. `0` is straight down, and `60` is highly tilted.
    - **`bearing`**: Degrees of rotation clockwise from North (`0`). Negative values represent counter-clockwise rotation.
- `onChapterEnter`: Layers to be displayed/hidden/muted when the section becomes active. _Array of objects_
    - `layer`: Layer name as assigned in Mapbox Studio.
    - `opacity`: The opacity to display the layer. `0` is fully transparent, `1` is fully opaque.
- `onChapterExit`: Same as `onChapterEnter` except it is triggered when the section becomes inactive. _Array of objects_


#### Mapbox Studio Style Configuration

Add and style each custom layer in your Studio style. Before the final publish, set any layers's style to be hidden with `0` opacity. **Do not hide the layer**. For example, if you have a `circle` layer, makes sure the `color-opacity` and/or the `stroke-opacity` is set to 0.

This will ensure that the map appears correctly when the resume page loads. To adjust the opacity of the layers as the reader scrolls through the resume, use the `onChapterEnter` or `onChapterExit` configuration options to set your desired opacity for the layer.

## Deployment

Host the `index.html` and `config.js` files in the same directory in a web-accessible location.

## Built With

- Mapbox GL JS
- Scrollama.js

## Authors

This repository is based on (and was forked from) the [Mapbox Storytelling](https://github.com/mapbox/storytelling). Original authors: John Branigan on the Mapbox [Solutions Architecture Team](mailto:solutions_architecture@mapbox.com)

## License

BSD 3-Clause License
