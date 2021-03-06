import { CUqBase } from "tonvaApp";
import { VMain } from "./VMain";
import { VTest } from "./VTest";
import { test } from "parser/test";

export class CHome extends CUqBase {
    protected async internalStart() {

    }
    tab = () => this.renderView(VMain);

    test = () => {
        this.openVPage(VTest);
    }

    testParser = () => {
        alert(test());
    }

    actionTestExpression = async () => {
        let rev = test();

        let data = {
            name: 'subject3',
            a: rev,
        };
        await this.uqs.performance.TestExpression.submitConvert(data);
    }
}
