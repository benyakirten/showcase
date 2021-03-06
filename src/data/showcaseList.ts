const showcaseList: Array<ShowcaseItem> = [
    {
        name: "Click in Box",
        description: `As a part of the Recovering Grandeur website, this animation
        creates a node inside of the parent element at the point of
        contact (the click, using the event data generated) for several
        seconds then unmounts as soon as the animation is complete. The
        effect of this animation is to have an element respond to a
        click. For example, a button may flash from wherever it was
        clicked. The shape, length and color can be customized under the
        controls. The purpose of this animation in Recovering Grandeur
        is to highlight the disconnect between purposeful actions and
        ones done in imitation of someone else's actions (such as highly
        corporate, PR-related, or ones made by Machine Learning models
        with no human oversight) without any of the insight or
        meaningfulness of the original. The animation occurs on the
        entire HTML body instead of within a host element, which renders
        the effect purposeless.`,
        meta: ["click", "box", "interaction", "flash", "contain", "recovering", "grandeur", "delusion", "delusions", "form", "2021"]
    },
    {
        name: "Concentric Circles",
        description: `This widget is an HTML canvas that, upon the mouse heading over,
        shows a fan out of concentric circles radiating from the nearet
        corner. The canvas has three important elements: a starting
        color, and ending color and a number of circles. An average
        offset color is determined for every circle, forming a
        low-definition gradient (depending on the number of circles).
        Another property is the radius delta, how much larger the radius
        of each circle is relative to the last. It effectively controls
        the speed of the animation. As to why this exists, I tried to
        think of the most gaudy, useless, over-the-top animation and
        implemented this. What's the point? It's what the machines of
        Recovering Grandeur think that humans will like. bright,
        flashing lights, right?`,
        meta: ["circle", "circles", "mouseover", "canvas", "color", "colors", "recovering", "grandeur", "delusion", "delusions", "form", "2021"]
    },
    {
        name: "Color Boxes",
        description: `This widget is a grid of colored boxes with text on each
        that announces the box's hex color. The color on each div shifts based
        on an interval and so does the text. The display differs quite a bit from
        its original implementation in Vue because React treats state quite a bit
        differently. Logically, the goal would be to select individual squares and change
        their colors, but React obliges me to change the state of all the squares every time one's color changes.
        In its original context, the animation is for a game of memory. The point is that the animation's in the middle of human and machine.
        It's supposed to be an incarnation of an adolescent desire to play but at the same time
        the boxes change too quickly and too perfectly for any sort of human to track and understand.
        There are more than a hundred calculations going on every time one of the squares changes color.
        Imagine: cycling through each box to find a few indexes to change. Cycling through 141
        named colors and choosing which to display, changing its status from available to used and the opposite for the old color.
        Every time the measurements of the boxes are changed, the number of columns in the grids is calculated dynamically.
        What can be discerned from the display? It would be nice if it could be communicated.`,
        meta: ["grid", "squares", "color", "hex", "click", "recovering", "grandeur", "delusion", "delusions", "form", "2021"]
    },
    {
        name: "Filter Generator",
        description: `The filter generator was something I created because I wanted to randomly generate different filters for images
        using the CSS filter property. If you don't know, CSS is a way to style things in HTML (set an items' color, height, etc.), but
        what if you want to do it dynamically, as in popping up a window if you click a button? You can do a lot with CSS, but if you really
        want your website to have logic and think, you have to do it in JavaScript. But manipulating the CSS in JavaScript is kinda awkward, and
        there's a confusion of purposes. This gadget does the hard lifting so you can ignore the stink under your nose.
        Onto the meaning of the filter: the context is the Recovering Grandeur website. This time, it's more of a reflection on
        how humans imagine how computers will work. There's this fascination with AI and Neural Network or Machine Learning.
        But the thing is that Machine Learning doesn't understand what judgments it's making or why. All it sees is numbers and in certain
        arrangements of numbers, it comes to a conclusion about what it should do with other numbers. A computer, as of now,
        has no access to reasoning or answering 'why' questions. Thus, a picture that is filtered or distorted means the same thing
        to a computer as the undistorted image.`,
        meta: ["filter", "generator", "drag", "drop", "image", "color", "colors", "recovering", "grandeur", "delusion", "delusions", "form", "2021"]
    },
    {
        name: "Invert Button",
        description: `The invert box animation is something I see often on websites, and it's neat. I also wanted to
        recreate it from scratch so I could get used to it. A button will contain some text (click here or something), and as
        soon as you trigger it, a wave comes from one of the corners, changing the background change, and the text color will
        change to contrasting color (usually the original color of the background). The way it works is that the button will
        contain the text in a span and an empty div. The div is 200% as wide/tall as the button, but the overflow is hidden
        so you can't see the part of the div that extend beyond the button... oh, and it's also scaled to 0 so it's not visible anyway. 
        When it's triggered (usually hovered), the empty div will beecome visible and transition to a scale of 1. The transform origin
        is a corner (or a side) with a specific clip-path so the element looks like a triangle or whatever as it fills in the background.
        There's no deeper meaning to this, sorry. I just wanted to learn how to do this, so I used it on the egtpress.com website`,
        meta: ['invert', 'box', 'hover', '2021', 'egtpress', 'english garden talk press']
    }
];

export default showcaseList;