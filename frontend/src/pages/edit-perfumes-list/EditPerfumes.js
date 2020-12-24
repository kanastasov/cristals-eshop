import React from 'react';

import usePagination from "../../component/pagination/usePagination";
import AccountNavbar from "../../component/account-navbar/AccountNavbar";
import PaginationItem from "../../component/pagination/PaginationItem";
import SearchForm from "../../component/search-form/SearchForm";
import PerfumeCardItem from "../../component/card/PerfumeCardItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons";

function EditPerfumes({data, itemsPerPage, startFrom, searchByData}) {
    const {slicedData, pagination, prevPage, nextPage, changePage, setFilteredData, setSearching} = usePagination({
        itemsPerPage,
        data,
        startFrom
    });

    return (
        <div>
            <AccountNavbar/>
            <div className="container mt-5">
                <h4><FontAwesomeIcon className="ml-2 mr-2" icon={faList}/> Список товаров</h4>
                <br/>
                <div className="container form row">
                    <PaginationItem
                        pagination={pagination}
                        prevPage={prevPage}
                        changePage={changePage}
                        nextPage={nextPage}/>
                    <div className="ml-5">
                        <SearchForm
                            data={data}
                            searchByData={searchByData}
                            setFilteredData={setFilteredData}
                            setSearching={setSearching}/>
                    </div>
                </div>
                <div className="container-fluid mt-3">
                    <div className="row">
                        {slicedData.map((perfume) => {
                            return (
                                <PerfumeCardItem
                                    perfume={perfume}
                                    colSize={2}
                                    link={"/product/list/edit"}
                                    btnName={"EDIT"}/>
                            );
                        })}
                    </div>
                </div>
                <PaginationItem
                    pagination={pagination}
                    prevPage={prevPage}
                    changePage={changePage}
                    nextPage={nextPage}/>
            </div>
        </div>
    );
}

export default EditPerfumes;