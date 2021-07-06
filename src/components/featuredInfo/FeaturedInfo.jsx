import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./featuredInfo.css"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,745</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="featureIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,445</span>
                    <span className="featuredMoneyRate">
                        -1.4 <ArrowDownward className="featureIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowUpward className="featureIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
