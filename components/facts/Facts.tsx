import DsnGrid, { DsnGridProps } from "../../layout/DsnGrid";
import { dsnCN } from "../../hooks/helper";

function Facts({ className, ...restProps }: DsnGridProps) {
    return (
        <DsnGrid className={dsnCN("facts-section p-relative over-hidden", className)} {...restProps}>
            <div className="facts-item">
                <div className="text-center p-relative">
                    <span className="number">60+</span>
                    <h6 className="sm-title-block v-middle w-100">Satisfied Client</h6>
                </div>
            </div>

            <div className="facts-item">
                <div className="text-center p-relative">
                    <span className="number">51</span>
                    <h6 className="sm-title-block v-middle w-100">Working hours were spent</h6>
                </div>
            </div>

            <div className="facts-item">
                <div className="text-center p-relative">
                    <span className="number">57+</span>
                    <h6 className="sm-title-block v-middle w-100">Projects Completed</h6>
                </div>
            </div>

            <div className="facts-item">
                <div className="text-center p-relative">
                    <span className="number">40+</span>
                    <h6 className="sm-title-block v-middle w-100">Mebmers</h6>
                </div>
            </div>
        </DsnGrid>
    );
}

export default Facts;