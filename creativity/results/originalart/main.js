const images = ['<img src="mona-lisa.jpg">', '<img src="mona-lisa.jpg">', '', '<img src="mona-lisa.jpg">', '<img src="mona-lisa.jpg">', '<img src="mona-lisa.jpg">', '<img src="lhooq.jpg">', '<img src="lhooq.jpg">', '<img src="lhooq.jpg">', '<img src="monalisapng.png">', '<img src="monalisapng.png">', '<img src="monalisapng.png">', '<img src="LHOOQ2.png">', '<img src="Geoff.jpg">', '<img src="Geoff.jpg">', '<img src="Geoff.jpg">', '<img src="Geoff.jpg">', '<img src="Geoff.jpg"><img src="JL.png">', '<img src="Geoff.jpg"><img src="JL.png">', '<img src="geoffpng.png">', '<img src="lowpolyjl.png">', '<img src="geoffpng.png"><img src="lowpolyjl.png">', '<img src="geoffpng.png"><img src="JL.png">', '<img src="Geoff.jpg"><img src="lowpolyjl.png">', '<img src="Geoff.jpg"><img src="lowpolyjl.png">', '<img src="jlshaved.png">', '<img src="jlshaved.png">']
const artist = ["Welcome to the Tang art exhibition, here is my first digital painting. I call it, <i>Mona Lisa</i>. A lot of hard work went into this original creation, I hope you appreciate it.", "Of course not, paint is messy. But I did put in front of you right now. That is my work, my art form.", "It’s okay, not everyone can appreciate true art. I’ll just bring out my next piece, it’s even greater than the last.", "Behold, one of my finest creations. I call it, <i>Woman</i>", "No, this is a completely different thing", "Yeah so it’s changed", "There. I changed it. Now it is it art?", "Artwork degrades slowly over time. As it changes, does it become new art in every instance? Who is responsible for the new art? The original artist, or time itself?", "And if time itself is an artist, then can we not claim everything as original art, because the art had never before been presented in that exact condition in each particular moment?", "Observe: several polygons arranged together that are in no way related to any prior paintings.", "How is this any more artful than anything I previously showed. There is no message behind this modification. A computer could have done it if it were clever enough.", "The ownership of ideas is such a limiting mentality. There are so many good ideas that we don’t have compared to just a few ideas that we do. Why shouldn’t we allow ourselves to grow into a larger space", "Okay this is mine too then. I am a creative genius.", "My next work. I title it: <i>Man</i>", "Correct. This is a collage.", "It is a collage of 1 image", "Why not?", "Alright now it’s a collage of 2. I call it, <i>Men</i>", "Correct. Why invest effort into making one thing that could be a bad idea when I could come up with many bad ideas until a good one emerges?", "What about this?", "Or this?", "Or this?", "Or this?", "Or this?", "I don’t know. Meaning comes after creation. Sometimes a long time after. I just want to create right now, that’s the exciting part.", "Just this. My ultimate creation. I have no idea what it means.", "Thank you. That’s all the art I have. Goodbye."]
const viewer = ["You did not paint this", "Sure, but someone else created it. You can’t take credit for that.", "Alright.", "That’s just the <i>Mona Lisa</i> again", "You didn’t even modify it you just changed the name", "But the art itself isn’t changed", "Sure, but Duchamp did that, so it’s not really a new creation", "...", "Just create something that’s actually new", "It’s progress I guess", "But at least it’s yours", "Please stop", "You know what, fine. Just please move on.", "That is a picture. And I highly doubt you were the photographer.", "No, it is clearly a picture.", "I don’t think you can do that", "Because then it’s just a picture", "You really are set on doing the absolute minimum and pretending it’s some kind of “woke” artwork aren’t you", "Fine. But this is one is a bad idea.", "Maybe", "Maybe", "Maybe", "But one of them is just… okay sure, maybe", "What are you trying to say with these? Is there any meaning behind your work?", "I guess that’s respectable. Do you have anything else to show?", "Fascinating. I don’t know what it means either. Good luck finding meaning", "Goodbye"]

let slide = 0;

function nextSlide() {
    slide++
    if (slide > 26) {
        document.getElementById("everything").innerHTML = '<img src="jlshaved.png">'
    } else {
        document.getElementById("art").innerHTML = images[slide]
        document.getElementById("words").innerHTML = artist[slide];
        document.getElementById("response").innerHTML = viewer[slide];
    }

}

document.getElementById("response").addEventListener("click", () => {

    nextSlide();
})
