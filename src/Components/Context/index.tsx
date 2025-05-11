import React, { useState } from 'react';
import Style from './Context.module.scss';
import ContextSale from './Sale';
import RenderUiProduct from './RenderProduce';

function Context({ data, dataProcedure, title }) {
    /// Render
    const [RenderUi, SetRenderUi] = useState(false);

    return (
        <div className={Style.Wrapper}>
            <ContextSale title={title} data={data} />
            <RenderUiProduct data={dataProcedure} />
        </div>
    );
}

export default Context;