import React, { useState } from 'react';

interface CollapsedProps { }

export const Collapsed: React.FC<CollapsedProps> = () => {
    const [isParentCollapsed, setIsParentCollapsed] = useState(false);
    const [isChildrenCollapsed, setIsChildrenCollapsed] = useState(true);

    const handleParentCollapsed = () => {
        setIsParentCollapsed(!isParentCollapsed);
    };

    const handleChildrenCollapsed = () => {
        setIsChildrenCollapsed(!isChildrenCollapsed);
    };

    return (
        <>
            {isParentCollapsed ? (
                <div style={{ padding: '1vmin', margin: '1vmin', width: '29vmin', backgroundColor: "#3663cd", color: "white", height: "3vmin", borderRadius: "1vmin" }}>
                    <button type='button' onClick={handleParentCollapsed} style={{ border: '1px solid black', marginRight: "1vmin", width: "3vmin", height: "3vmin" }}>
                        +
                    </button>
                    All Tickets (3)
                </div>
            ) : (
                <div>
                    <div style={{ padding: '1vmin', margin: '1vmin', width: '29vmin', backgroundColor: "#3663cd", color: "white", height: "3vmin", borderRadius: "1vmin" }}>
                        <button type='button' onClick={handleParentCollapsed} style={{ border: '1px solid black', marginRight: "1vmin", width: "3vmin", height: "3vmin" }}>
                            -
                        </button>
                        All Tickets (3)
                    </div>
                    <div>
                        {isChildrenCollapsed ? (
                            <div style={{ padding: '1vmin', margin: "0.5vmin 0 0.5vmin 5vmin", width: '25vmin', height: "3vmin", backgroundColor: "#3663cd", color: 'white', borderRadius: '0.5vmin' }}>
                                <button type='button' onClick={handleChildrenCollapsed} style={{ border: '1px solid black', fontSize: '2vmin', marginRight: "3vmin", width:"2.5vmin", height:"2.5vmin" }}>
                                    +
                                </button>
                                *NFT Group* (1)
                            </div>
                        ) : (
                            <div>
                                <div style={{ padding: '1vmin', margin: "0.5vmin 0 0.5vmin 5vmin", width: '25vmin', height: "3vmin", backgroundColor: "#3663cd", color: 'white', borderRadius: '0.5vmin' }}>
                                    <button type='button' onClick={handleChildrenCollapsed} style={{ border: '1px solid black', fontSize: '2vmin', marginRight: "3vmin", width:"2.5vmin", height:"2.5vmin" }}>
                                        -
                                    </button>
                                    *NFT Group* (1)
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", padding: '1vmin', margin: "0.5vmin 0 0.5vmin 10vmin", width: '20vmin', height: "2.5vmin", backgroundColor: "#3663cd", color: 'white', borderRadius: '0.5vmin' }}>
                                    <a href='#' style={{ textDecoration: "none", color: "white"}}>Specific Seat (0)</a>
                                </div>
                                
                            </div>
                        )}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", padding: '1vmin', margin: "0.5vmin 0 0.5vmin 5vmin", width: '25vmin', height: "3vmin", backgroundColor: "#3663cd", color: 'white', borderRadius: '0.5vmin' }}>
                        <a href='#' style={{ textDecoration: "none", color: "white" }}>#1 (0)</a>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", padding: '1vmin', margin: "0.5vmin 0 0.5vmin 5vmin", width: '25vmin', height: "3vmin", backgroundColor: "#3663cd", color: 'white', borderRadius: '0.5vmin' }}>
                        <a href='#' style={{ textDecoration: "none", color: "white" }}>+</a>
                    </div>
                </div>
            )}
        </>
    );
};
