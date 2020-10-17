const emotions = [
    {
        mood: 'calm',
        pic: 'las la-smile',
        resource: '',
        backgroundColor: '#33A1FF'
    },
    {
        mood: 'happy',
        pic: 'las la-laugh',
        resource: '',
        backgroundColor: '#FBFB5A'
    },
    {
        mood: 'silly',
        pic: 'las la-grin-tongue-squint',
        resource: '',
        backgroundColor: '#F65AFB'
    },
    {
        mood: 'relaxed',
        pic: 'las la-smile-beam',
        resource: '',
        backgroundColor: '#A45AFB'
    },

    {
        mood: 'annoyed',
        pic: 'las la-meh-rolling-eyes',
        resource: 'https://www.psychologytoday.com/us/blog/the-squeaky-wheel/201510/7-quick-ways-stop-being-irritable',
        backgroundColor: '#AFF124'
    },
    {
        mood: 'sad',
        pic: 'las la-frown',
        resource: 'http://www.oprah.com/spirit/why-youre-sad-how-to-stop-being-sad-deepak-chopra',
        backgroundColor: '#2489F1'
    },
    {
        mood: 'shy',
        pic: 'las la-meh-blank',
        resource: 'https://psychcentral.com/blog/treating-social-anxiety-disorder-with-mindfulness/',
        backgroundColor: '#2450F1'
    },
    {
        mood: 'surprised',
        pic: 'las la-surprise',
        resource: 'https://www.makemebetter.net/how-to-handle-unexpected-situations-gracefully/',
        backgroundColor: '#24DEF1'
    },
    {
        mood: 'hungry',
        pic: 'las la-meh',
        resource: 'https://www.healthline.com/health-news/hangry-not-because-youre-extremely-hungry#1',
        backgroundColor: '#82E6F1'
    },

    {
        mood: 'confused',
        pic: 'las la-dizzy',
        resource: 'https://www.huffpost.com/entry/4-ways-to-find-direction-when-you-are-feeling-confused_b_5798e0dde4b0e339c2400320',
        backgroundColor: '#60E910'
    },
    {
        mood: 'sleepy',
        pic: 'las la-tired',
        resource: 'https://www.psychologytoday.com/us/blog/sleep-newzzz/201811/4-ways-sleep-deprivation-can-harm-your-emotional-health',
        backgroundColor: '#9C10E9'
    },
    {
        mood: 'sick',
        pic: 'las la-flushed',
        resource: 'https://www.psychologytoday.com/us/blog/urban-survival/201502/the-surprising-psychology-the-common-cold',
        backgroundColor: '#8FE910'
    },
    {
        mood: 'hurt',
        pic: 'las la-grimace',
        resource: 'https://medlineplus.gov/ency/patientinstructions/000417.htm',
        backgroundColor: '#20AFB6'
    },
    {
        mood: 'hot',
        pic: 'las la-sad-tear',
        resource: 'https://www.psychologytoday.com/us/blog/headshrinkers-guide-the-galaxy/201212/when-your-feelings-are-too-hot-handle',
        backgroundColor: '#E73E17'
    },
    {
        mood: 'nervous',
        pic: 'las la-grin-beam-sweat',
        resource: 'https://www.webmd.com/mental-health/features/ways-to-reduce-anxiety',
        backgroundColor: '#DE1111'
    },
    {
        mood: 'angry',
        pic: 'las la-angry',
        resource: 'https://www.mindful.org/mindfulness-of-anger/',
        backgroundColor: '#B50A0A'
    }
]

export default function Moods(state = { moods: emotions }, action) {
    switch (action.type) {

        default:
            return state
    }
}
