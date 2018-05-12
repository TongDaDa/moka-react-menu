/**
     people: LiuTong,
     changeTime: 5/12/18,
     description: 多选框;
 **/

import React, {Component} from 'react';
import classnames from 'classnames';
import './index.scss'

export default ({checked=false,onChange})=>{

    const classNames = classnames({checkbox:true, ['checkbox-checked']: checked});

    const handleClick = (e)=>{
        onChange && onChange(e.target.checked,e)
    }

    return <span className={classNames}>
            <input type="checkbox" role="hidden" aria-hidden="true" onClick={handleClick} />
            <span className="checkbox-inner">  </span>
        </span>
}