import MeetupList from '../components/meetups/MeetupList';

const dummy_meetups = [
    {
        id: 'm1',
        title: 'first meetup',
        image: 'https://www.asicentral.com/media/20479/scottcolumnfig4-800.jpg',
        address: 'My House Lane, 12345, Some City',
        description: 'First meetup'

    },
    {
        id: 'm2',
        title: 'second meetup',
        image: 'https://th.bing.com/th/id/OIP.2wb9smspgUL9Wr_r0kElkgHaEK?pid=ImgDet&rs=1',
        address: 'My House Lane, 12345, Some City',
        description: 'Second meetup'

    }
];

export default function HomePage(props) { 
    return <MeetupList meetups={props.meetups} />
};

export async function getStaticProps() {
    // fetch data from an API/database
    // read files in file system
    return {
        props: {
            meetups: dummy_meetups,
        },
        revalidate: 1
    };
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     //fetch data from an API

//     return {
//         props: {
//             meetups: dummy_meetups
//         }
//     };
// }