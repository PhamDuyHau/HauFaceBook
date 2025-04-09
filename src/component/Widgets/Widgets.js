import React from 'react';

function Widgets() {
    return (
        <div className="widgets">
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvietnamairlines&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&locale=vi_VN"
                width="340"
                height="500"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allow="encrypted-media"
            ></iframe>
        </div>
    );
}

export default Widgets;
