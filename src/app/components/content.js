"use client"

import { useEffect, useState } from 'react';

import Context1Des from './pages/desktop/context-1';
import Context2Des from './pages/desktop/context-2';
import Context3Des from './pages/desktop/context-3';
import Context4Des from './pages/desktop/context-4';
import Context5Des from './pages/desktop/context-5';

import Context1Tab from './pages/tablet/context-1';
import Context2Tab from './pages/tablet/context-2';
import Context3Tab from './pages/tablet/context-3';
import Context4Tab from './pages/tablet/context-4';
import Context5Tab from './pages/tablet/context-5';

import Context1Mob from './pages/mobile/context-1';
import Context2Mob from './pages/mobile/context-2';
import Context3Mob from './pages/mobile/context-3';
import Context4Mob from './pages/mobile/context-4';
import Context5Mob from './pages/mobile/context-5';

import { isBrowser, isTablet, isMobile } from 'react-device-detect';


function Content() {

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);


    if (!hasMounted) {
        return 'Loading.....'
    } else {

        return (
            <>


                {isBrowser && !isTablet && !isMobile &&

                    <div>
                        <Context1Des />
                        <Context2Des />
                        <Context3Des />
                        <Context4Des />
                        <Context5Des />
                    </div>
                }
                {isTablet && isMobile &&
                    <div>
                        <Context1Tab />
                        <Context2Tab />
                        <Context3Tab />
                        <Context4Tab />
                        <Context5Tab />
                    </div>
                }
                {!isTablet && isMobile &&
                    <div>
                        <Context1Mob />
                        <Context2Mob />
                        <Context3Mob />
                        <Context4Mob />
                        <Context5Mob />
                    </div>
                }

            </>

        );
    }
}

export default Content;