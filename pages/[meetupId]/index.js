import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
    return (
        <MeetupDetail
        image = {props.meetupData.image}
        title="First meetup"
        address="Some street 5, Some City"
        description="This is our first meetup"
        />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { 
                params: {
                    meetupId: 'm1',
                },
            },
            { 
                params: {
                    meetupId: 'm2',
                },
            },
        ]
    }
}

export async function getStaticProps(context) {
    //fetch data for a single meetup

    const meetupId = context.params.meetupId;
    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: 'https://www.asicentral.com/media/20479/scottcolumnfig4-800.jpg',
                title: "First meetup",
                address: "Some street 5, Some City",
                description: "This is our first meetup",
            }
        }
    }
}