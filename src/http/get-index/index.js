const Main = require('@architect/views/main.js')
const arc = require('@architect/functions')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'MIDISpecs.org', // ←  Start by adding your name!
    title: 'MIDISpecs.org',
    occupation: 'Open Data for Music Hardware',
    bio: '<a href="https://www.midispecs.org/">MIDISpecs.org</a> is a project that aims to collect and, tabulate and provide tools for using MIDI specifications fore the long tail of MIDI 1.0 hardware.',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'midispecs@techno.email',
    twitter: 'midispecs',
    github: 'https://github.com/midispecs-org/midispecs.org',

    /**
     * Layout
     */
    photographer: 'Caught In Joy',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@caught_in_joy',
    image: arc.static('background.jpg')
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
