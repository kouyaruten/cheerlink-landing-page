import Helmet from "react-helmet";

export default function NewWidget() {
    return (
        <>
            <div className="justify-center h-60"
                id="getWaitlistContainer"
                data-waitlist_id="8125"
            ></div>
            <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
                />
                <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
            </Helmet>
        </>
    );
}
