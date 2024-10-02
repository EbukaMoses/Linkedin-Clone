import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import "./Network.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button from "../../Component/Common/Button";
import AdCard from "../../Component/Common/AdCard";
import { HiMiniUser } from "react-icons/hi2";
import { HiUsers, HiUserGroup } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";
import { MdOutlineEventNote } from "react-icons/md";
import me from "/images/me.jpg";
import author1 from "/images/author1.jpg";

const Network = () => {
  const [content, setContent] = useState(false);
  const [tab, setTab] = useState(false);
  return (
    <section className="container network flex">
      <div className="leftside">
        <div className="smallcard">
          <div className="flex">
            <h3>Manage my network</h3>
            {content ? (
              <span onClicK={() => setContent(false)}>
                <IoIosArrowUp className="icon" />
              </span>
            ) : (
              <span onClicK={() => setContent(true)}>
                <IoIosArrowDown className="icon" />
              </span>
            )}
          </div>
          <div className={`contents ${content ? "" : "hidden"}`}>
            <div className="flex">
              <div className="content_icon">
                <HiMiniUser />
                <span>Following & followers</span>
              </div>
              <div className="num">776</div>
            </div>
            <div className="flex">
              <div className="content_icon">
                <TiContacts />
                <span>Contact</span>
              </div>
              <div className="num">776</div>
            </div>
            <div className="flex">
              <div className="content_icon">
                <HiUserGroup />
                <span>Groups</span>
              </div>
              <div className="num">76</div>
            </div>
            <div className="flex">
              <div className="content_icon">
                <MdOutlineEventNote />
                <span>Event</span>
              </div>
              <div className="num">76</div>
            </div>
            <div className="flex">
              <div className="content_icon">
                <HiUsers />
                <span></span>
              </div>
              <div className="num">776</div>
            </div>
          </div>
        </div>
        <AdCard />
      </div>
      <div className="network_main flex flex-col">
        <div className="card tab flex">
          <span className={tab ? "" : "border"} onClick={() => setTab(false)}>
            Grow
          </span>
          <span className={tab ? "border" : ""} onClick={() => setTab(true)}>
            Catch up
          </span>
        </div>
        <div className="network_content">
          <div className="header flex">
            <h5>Invitations</h5>
            <h3>See all 27</h3>
          </div>
          {tab && (
            <div className="grow">
              <div className="body flex">
                <div className="icon_title flex">
                  <div className="img">
                    <img src={me} alt="" />
                  </div>
                  <div className="title">
                    <p>Newsletter • Monthly</p>
                    <p>
                      <strong>Coursera</strong> invited you to subscribe to
                      <strong>The Learning Curve</strong>
                    </p>
                  </div>
                </div>
                <div className="action_btn flex">
                  <span>Ignore</span>
                  <Button title="Accept" />
                </div>
              </div>
              <div className="body flex">
                <div className="icon_title flex">
                  <div className="img">
                    <img src={me} alt="" />
                  </div>
                  <div className="title">
                    <p>Newsletter • Monthly</p>
                    <p>
                      <strong>Coursera</strong> invited you to subscribe to
                      <strong>The Learning Curve</strong>
                    </p>
                  </div>
                </div>
                <div className="action_btn flex">
                  <span>Ignore</span>
                  <Button title="Accept" />
                </div>
              </div>
              <div className="body flex">
                <div className="icon_title flex">
                  <div className="img">
                    <img src={me} alt="" />
                  </div>
                  <div className="title">
                    <p>Newsletter • Monthly</p>
                    <p>
                      <strong>Coursera</strong> invited you to subscribe to
                      <strong>The Learning Curve</strong>
                    </p>
                  </div>
                </div>
                <div className="action_btn flex">
                  <span>Ignore</span>
                  <Button title="Accept" />
                </div>
              </div>
            </div>
          )}

          {/* --------------catch----------------------  */}
          {!tab && (
            <div className="catch">
              <div className="body flex">
                <div className="icon_title flex">
                  <div className="img">
                    <img src={author1} alt="" />
                  </div>
                  <div className="title">
                    <p>Newsletter • Monthly</p>
                    <p>
                      <strong>Coursera</strong> invited you to subscribe to
                      <strong>The Learning Curve</strong>
                    </p>
                  </div>
                </div>
                <div className="action_btn flex">
                  <span>Ignore</span>
                  <Button title="Accept" />
                </div>
              </div>
              <div className="body flex">
                <div className="icon_title flex">
                  <div className="img">
                    <img src={author1} alt="" />
                  </div>
                  <div className="title">
                    <p>Newsletter • Monthly</p>
                    <p>
                      <strong>Coursera</strong> invited you to subscribe to
                      <strong>The Learning Curve</strong>
                    </p>
                  </div>
                </div>
                <div className="action_btn flex">
                  <span>Ignore</span>
                  <Button title="Accept" />
                </div>
              </div>
              <div className="body flex">
                <div className="icon_title flex">
                  <div className="img">
                    <img src={author1} alt="" />
                  </div>
                  <div className="title">
                    <p>Newsletter • Monthly</p>
                    <p>
                      <strong>Coursera</strong> invited you to subscribe to
                      <strong>The Learning Curve</strong>
                    </p>
                  </div>
                </div>
                <div className="action_btn flex">
                  <span>Ignore</span>
                  <Button title="Accept" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Network;
