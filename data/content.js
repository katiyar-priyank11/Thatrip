/* ================================
   ThatTrip - Content Data
   ================================ */

// Destinations Data
const destinations = [
    {
        id: 1,
        name: 'Bali, Indonesia',
        description: 'Tropical paradise with stunning beaches, ancient temples, and vibrant culture.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
        price: 'From $899',
        badge: 'Popular',
        alt: 'Beautiful beach in Bali with traditional boat'
    },
    {
        id: 2,
        name: 'Paris, France',
        description: 'The City of Light, romance, art, and world-class cuisine.',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
        price: 'From $1,299',
        badge: 'Popular',
        alt: 'Eiffel Tower at sunset in Paris'
    },
    {
        id: 3,
        name: 'Santorini, Greece',
        description: 'Iconic white-washed buildings overlooking the breathtaking Aegean Sea.',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
        price: 'From $1,499',
        badge: 'New',
        alt: 'White buildings with blue domes in Santorini'
    },
    {
        id: 4,
        name: 'Tokyo, Japan',
        description: 'A blend of ancient tradition and cutting-edge modernity.',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
        price: 'From $1,399',
        badge: null,
        alt: 'Tokyo cityscape with Mount Fuji'
    },
    {
        id: 5,
        name: 'Maldives',
        description: 'Luxury overwater bungalows in crystal-clear turquoise waters.',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
        price: 'From $1,899',
        badge: 'Popular',
        alt: 'Overwater villa in Maldives'
    },
    {
        id: 6,
        name: 'Swiss Alps',
        description: 'Majestic mountains, pristine lakes, and charming alpine villages.',
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
        price: 'From $1,599',
        badge: null,
        alt: 'Snow-capped Swiss Alps with village'
    },
    {
        id: 7,
        name: 'Dubai, UAE',
        description: 'Futuristic skyline, luxury shopping, and Arabian adventures.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
        price: 'From $1,199',
        badge: 'New',
        alt: 'Dubai skyline at night with Burj Khalifa'
    },
    {
        id: 8,
        name: 'New York, USA',
        description: 'The city that never sleeps, filled with iconic landmarks and energy.',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
        price: 'From $999',
        badge: null,
        alt: 'New York City skyline'
    },
    {
        id: 9,
        name: 'Iceland',
        description: 'Land of fire and ice, with waterfalls, geysers, and Northern Lights.',
        image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800',
        price: 'From $1,799',
        badge: 'Popular',
        alt: 'Northern Lights over Iceland landscape'
    }
];

// Services Data
const services = [
    {
        id: 1,
        icon: 'fa-map-marked-alt',
        title: 'Customized Tour Packages',
        features: [
            'Tailored itineraries',
            'Flexible scheduling',
            'Personal preferences accommodation'
        ]
    },
    {
        id: 2,
        icon: 'fa-hiking',
        title: 'Adventure Tours',
        features: [
            'Trekking and hiking',
            'Water sports',
            'Wildlife safaris'
        ]
    },
    {
        id: 3,
        icon: 'fa-gem',
        title: 'Luxury Travel',
        features: [
            'Premium accommodations',
            'Private transportation',
            'Exclusive experiences'
        ]
    },
    {
        id: 4,
        icon: 'fa-users',
        title: 'Family Vacations',
        features: [
            'Kid-friendly destinations',
            'Family activities',
            'Safe and comfortable travel'
        ]
    },
    {
        id: 5,
        icon: 'fa-heart',
        title: 'Honeymoon Packages',
        features: [
            'Romantic destinations',
            'Special arrangements',
            'Privacy and comfort'
        ]
    },
    {
        id: 6,
        icon: 'fa-users-cog',
        title: 'Group Tours',
        features: [
            'Organized group travel',
            'Social experiences',
            'Cost-effective options'
        ]
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        location: 'United States',
        avatar: 'https://i.pravatar.cc/150?img=1',
        rating: 5,
        text: 'The trip to Bali was absolutely incredible! ThatTrip took care of every detail, from airport pickup to our hotel. Our guide was knowledgeable and friendly. This was the vacation of a lifetime!',
        package: 'Bali Adventure Package'
    },
    {
        id: 2,
        name: 'Michael Chen',
        location: 'Singapore',
        avatar: 'https://i.pravatar.cc/150?img=12',
        rating: 5,
        text: 'Exceptional service from start to finish. The attention to detail and personalized recommendations made our Paris trip unforgettable. We will definitely book with ThatTrip again!',
        package: 'Paris Romance Tour'
    },
    {
        id: 3,
        name: 'Emma Williams',
        location: 'United Kingdom',
        avatar: 'https://i.pravatar.cc/150?img=5',
        rating: 5,
        text: 'As a solo traveler, I was a bit nervous, but ThatTrip made me feel safe and supported throughout my journey in Japan. The cultural experiences were authentic and enriching. Highly recommend!',
        package: 'Tokyo Cultural Experience'
    },
    {
        id: 4,
        name: 'David Martinez',
        location: 'Spain',
        avatar: 'https://i.pravatar.cc/150?img=8',
        rating: 5,
        text: 'Our family vacation to the Maldives exceeded all expectations. The kids had an amazing time, and my wife and I got to relax. Thank you ThatTrip for creating such beautiful memories!',
        package: 'Maldives Family Package'
    },
    {
        id: 5,
        name: 'Priya Sharma',
        location: 'India',
        avatar: 'https://i.pravatar.cc/150?img=9',
        rating: 5,
        text: 'The honeymoon package to Santorini was pure magic! Every moment was perfectly planned, from the sunset dinner to the private yacht tour. ThatTrip made our special occasion truly memorable.',
        package: 'Santorini Honeymoon'
    },
    {
        id: 6,
        name: 'James Anderson',
        location: 'Australia',
        avatar: 'https://i.pravatar.cc/150?img=13',
        rating: 5,
        text: 'Best travel company I have ever worked with! The Swiss Alps tour was breathtaking, and everything was organized flawlessly. The local guides were fantastic. Five stars all the way!',
        package: 'Swiss Alps Adventure'
    }
];
