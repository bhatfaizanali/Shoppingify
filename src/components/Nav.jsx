import React, { Component } from 'react';
import { Flex } from "@chakra-ui/core";
import { FiMenu, GoGraph, VscHistory, BiCart } from "react-icons/all";


class Nav extends Component {
    state = {}
    render() {
        return (

            <Flex style={{ padding: "2rem" }} direction="column" alignItems="center">
                <Flex>
                    <svg id="b4f74b74-9f48-4ac7-9642-0389d8d43dd0" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 810 677.07902"><title>cookie love</title><circle cx="550" cy="175.07902" r="11" fill="#3f3d56"></circle><circle cx="550" cy="262.07902" r="11" fill="#3f3d56"></circle><circle cx="660" cy="284.07902" r="11" fill="#3f3d56"></circle><path d="M822.6334,442.74372c-4.36871-7.20568-19.62881-7.01971-19.62881-7.01971-13.89387,20.64326-47.29158-1.28486-47.29158-1.28486-24.80552,11.09762-39.94053-24.26786-39.94053-24.26786-33.37734-4.99093-28.2208-40.04535-28.2208-40.04535-16.60576-3.334-11.94635-33.35708-11.94635-33.35708s9.2142-7.55727,4.67987-13.08577c-2.88274-3.51474-3.06162-13.60194-2.80992-20.488a229.1527,229.1527,0,0,0-66.84591-9.91429c-126.5852,0-229.2028,102.6176-229.2028,229.2028s102.6176,229.2028,229.2028,229.2028,229.2028-102.61761,229.2028-229.2028a228.6756,228.6756,0,0,0-14.56269-80.52963C824.09293,443.2817,823.18084,443.64666,822.6334,442.74372Z" transform="translate(-195 -111.46049)" fill="#3F3D56"></path><path d="M583.26211,428.777s-39.52476-25.15213-77.25295,0c-13.20487,8.80324-19.8073,21.34786-22.81141,33.9365-5.34136,22.38287.51635,45.9798,14.79957,64.02176l85.35157,107.81251A25.371,25.371,0,0,0,608.6482,643.767q.27712-.06206.55792-.12947a25.44142,25.44142,0,0,0,16.08466-12.21275l59.35867-104.23962a100.95414,100.95414,0,0,0,12.82323-62.7946c-2.7836-21.43746-13.07807-44.03507-42.34736-51.78283C655.12532,412.60774,620.9903,398.2351,583.26211,428.777Z" transform="translate(-195 -111.46049)" fill="#F9A109"></path><path d="M583.26211,428.777s-39.52476-25.15213-77.25295,0c-13.20487,8.80324-19.8073,21.34786-22.81141,33.9365-5.34136,22.38287.51635,45.9798,14.79957,64.02176l85.35157,107.81251A25.371,25.371,0,0,0,608.6482,643.767q.27712-.06206.55792-.12947a25.44142,25.44142,0,0,0,16.08466-12.21275l59.35867-104.23962a100.95414,100.95414,0,0,0,12.82323-62.7946c-2.7836-21.43746-13.07807-44.03507-42.34736-51.78283C655.12532,412.60774,620.9903,398.2351,583.26211,428.777Z" transform="translate(-195 -111.46049)" opacity="0.1"></path><path d="M583.66434,434.8472s-37.07693-23.5944-72.46854,0c-12.38706,8.25805-18.58059,20.02576-21.39865,31.83476-5.01056,20.99665.48437,43.13218,13.883,60.05677l80.06559,101.13548a23.79971,23.79971,0,0,0,23.73248,8.6483q.26-.05822.52336-.12145a23.86582,23.86582,0,0,0,15.08851-11.45639l55.68248-97.78387a94.70188,94.70188,0,0,0,12.02906-58.90561c-2.61121-20.1098-12.26812-41.3079-39.72471-48.57582C651.07692,419.67937,619.05594,406.19686,583.66434,434.8472Z" transform="translate(-195 -111.46049)" fill="#F9A109"></path><path d="M585.1073,475.304s-18.03892-11.47931-35.25788,0a24.90439,24.90439,0,0,0-10.411,15.48846,34.40329,34.40329,0,0,0,6.75445,29.21923s46.18249,54.37968,50.50054,53.41275q.12648-.02832.25463-.05909c3.11123-.74714,34.432-53.14831,34.432-53.14831a46.07506,46.07506,0,0,0,5.85246-28.65916c-1.27042-9.784-5.96877-20.0974-19.32713-23.63344C617.90533,467.92439,602.32626,461.36479,585.1073,475.304Z" transform="translate(-195 -111.46049)" opacity="0.1"></path><polyline points="277.434 449.785 282.49 458.212 292.601 475.065 295.972 486.862 289.231 496.974 297.657 517.198 301.028 528.995 294.287 535.736 307.769 545.848" opacity="0.1"></polyline><polyline points="525.175 375.631 525.175 389.114 516.748 411.023 511.692 422.82 520.119 437.988 523.49 448.1 536.972 453.156 542.028 461.583 542.028 481.806" opacity="0.1"></polyline><path d="M806.12587,500.57448l-13.48251,8.42657s-6.74126,3.37063-6.74126,5.05594v13.48252" transform="translate(-195 -111.46049)" opacity="0.1"></path><polyline points="550.455 341.925 553.825 358.778 550.455 370.576" opacity="0.1"></polyline><polyline points="563.937 493.604 553.825 508.771 542.028 518.883 542.028 525.624 548.769 534.051 548.769 544.163 543.713 554.275" opacity="0.1"></polyline><polyline points="467.874 207.1 451.021 207.1 437.538 218.897 415.629 230.694 405.517 239.121 405.517 242.492 383.608 254.289 376.867 266.086" opacity="0.1"></polyline><path d="M480.86014,347.21084l-15.16783,30.33567-5.05595,11.7972-11.7972,15.16783s-8.42657,15.16783-10.11189,16.85315-13.48251,5.05594-13.48251,5.05594l16.85314,16.85315" transform="translate(-195 -111.46049)" opacity="0.1"></path><polyline points="218.448 352.037 215.077 373.946 218.448 387.429 218.448 411.023 208.336 454.841 218.448 466.638 230.245 481.806" opacity="0.1"></polyline><polyline points="243.727 362.149 253.839 367.205 260.58 389.114 274.063 385.743 280.804 397.541" opacity="0.1"></polyline><polyline points="429.112 581.24 456.077 577.869 467.874 566.072 484.727 566.072" opacity="0.1"></polyline><polyline points="265.636 545.848 275.748 557.645 292.601 562.701 304.399 566.072 307.769 584.61" opacity="0.1"></polyline></svg>
                </Flex>

                <Flex direction="column">
                    <FiMenu />
                    <VscHistory />
                    <GoGraph />
                </Flex>
                <Flex> <BiCart /></Flex>
            </Flex>

        );
    }
}

export default Nav;