/* =========================================================
   NAVBAR
========================================================= */

const mobileMenuToggle =
    document.querySelector(
        ".mobile-menu-toggle"
    );

const mobileMenu =
    document.querySelector(
        ".mobile-menu"
    );

const mobileMenuClose =
    document.querySelector(
        ".mobile-menu-close"
    );

const overlay =
    document.querySelector(
        ".overlay"
    );


function openMobileMenu() {

    mobileMenu.classList.add(
        "active"
    );

    overlay.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

}


function closeMobileMenu() {

    mobileMenu.classList.remove(
        "active"
    );

    overlay.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


mobileMenuToggle.addEventListener(
    "click",
    openMobileMenu
);


mobileMenuClose.addEventListener(
    "click",
    closeMobileMenu
);


overlay.addEventListener(
    "click",
    closeMobileMenu
);


document
    .querySelectorAll(
        ".mobile-menu-link"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        }
    );


/* NAVBAR HIDE ON SCROLL */

let lastScrollTop = 0;

const navbar =
    document.querySelector(
        ".navbar-apple"
    );


window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop;


        if (
            scrollTop >
            lastScrollTop &&
            scrollTop >
            navbar.offsetHeight
        ) {

            navbar.classList.add(
                "hidden"
            );

        } else {

            navbar.classList.remove(
                "hidden"
            );

        }


        lastScrollTop =
            Math.max(
                scrollTop,
                0
            );

    },
    {
        passive: true
    }
);


/* =========================================================
   FORM ELEMENTS
========================================================= */

const screen1 =
    document.getElementById(
        "screen1"
    );

const screen2 =
    document.getElementById(
        "screen2"
    );

const screen3 =
    document.getElementById(
        "screen3"
    );


const step1 =
    document.getElementById(
        "stepIndicator1"
    );

const step2 =
    document.getElementById(
        "stepIndicator2"
    );

const step3 =
    document.getElementById(
        "stepIndicator3"
    );


const username =
    document.getElementById(
        "username"
    );

const telegram =
    document.getElementById(
        "telegram"
    );

const orderId =
    document.getElementById(
        "orderId"
    );

const udid =
    document.getElementById(
        "udid"
    );

const description =
    document.getElementById(
        "description"
    );


const nextButton =
    document.getElementById(
        "nextButton"
    );

const backButton =
    document.getElementById(
        "backButton"
    );

const submitButton =
    document.getElementById(
        "submitButton"
    );

const newRequestButton =
    document.getElementById(
        "newRequestButton"
    );


const loadingOverlay =
    document.getElementById(
        "loadingOverlay"
    );


/* =========================================================
   CONTACT
========================================================= */

const contactToggle =
    document.getElementById(
        "contactToggle"
    );

const contactContent =
    document.getElementById(
        "contactContent"
    );


contactToggle.addEventListener(
    "click",
    () => {

        const open =
            contactContent.classList.contains(
                "open"
            );


        contactContent.classList.toggle(
            "open",
            !open
        );


        contactToggle.classList.toggle(
            "open",
            !open
        );

    }
);


/* =========================================================
   TELEGRAM
========================================================= */

const telegramOption =
    document.getElementById(
        "telegramOption"
    );

const telegramField =
    document.getElementById(
        "telegramField"
    );

const telegramChevron =
    document.getElementById(
        "telegramChevron"
    );


telegramOption.addEventListener(
    "click",
    () => {

        const open =
            telegramField.classList.contains(
                "show"
            );


        telegramField.classList.toggle(
            "show",
            !open
        );


        telegramChevron.style.transform =
            !open
                ? "rotate(90deg)"
                : "rotate(0deg)";


        if (!open) {

            setTimeout(
                () => {

                    telegram.focus();

                },
                150
            );

        }

    }
);


/* =========================================================
   STEP
========================================================= */

function setStep(number) {


    [
        step1,
        step2,
        step3
    ]
    .forEach(
        step => {

            step.classList.remove(
                "active",
                "completed"
            );

        }
    );


    if (number === 1) {

        step1.classList.add(
            "active"
        );

    }


    if (number === 2) {

        step1.classList.add(
            "completed"
        );

        step2.classList.add(
            "active"
        );

    }


    if (number === 3) {

        step1.classList.add(
            "completed"
        );

        step2.classList.add(
            "completed"
        );

        step3.classList.add(
            "active"
        );

    }

}


/* =========================================================
   SCREEN TRANSITION
========================================================= */

function changeScreen(
    current,
    next,
    direction = "forward"
) {


    current.classList.remove(
        "active"
    );


    current.classList.add(
        direction === "forward"
            ? "exit-left"
            : "exit-right"
    );


    setTimeout(
        () => {

            current.classList.remove(
                "exit-left",
                "exit-right"
            );


            next.classList.add(
                "active"
            );


            window.scrollTo({

                top:
                    0,

                behavior:
                    "smooth"

            });

        },
        250
    );

}


/* =========================================================
   STEP 1 VALIDATION
========================================================= */

function validateStep1() {

    let valid = true;


    if (
        !username.value.trim()
    ) {

        username.classList.add(
            "invalid"
        );

        document
            .getElementById(
                "usernameError"
            )
            .classList.add(
                "show"
            );

        valid = false;

    } else {

        username.classList.remove(
            "invalid"
        );

        document
            .getElementById(
                "usernameError"
            )
            .classList.remove(
                "show"
            );

    }

    // Validate Telegram
    if (
        !telegram.value.trim()
    ) {

        telegram.classList.add(
            "invalid"
        );

        document
            .getElementById(
                "telegramError"
            )
            .classList.add(
                "show"
            );

        valid = false;

    } else {

        telegram.classList.remove(
            "invalid"
        );

        document
            .getElementById(
                "telegramError"
            )
            .classList.remove(
                "show"
            );

    }


    return valid;

}


username.addEventListener(
    "input",
    () => {

        if (
            username.value.trim()
        ) {

            username.classList.remove(
                "invalid"
            );

            document
                .getElementById(
                    "usernameError"
                )
                .classList.remove(
                    "show"
                );

        }

    }
);


telegram.addEventListener(
    "input",
    () => {

        if (
            telegram.value.trim()
        ) {

            telegram.classList.remove(
                "invalid"
            );

            document
                .getElementById(
                    "telegramError"
                )
                .classList.remove(
                    "show"
                );

        }

    }
);


/* =========================================================
   NEXT
========================================================= */

nextButton.addEventListener(
    "click",
    () => {

        if (
            !validateStep1()
        ) {

            const firstError =
                document.querySelector(
                    ".invalid"
                );


            if (
                firstError
            ) {

                firstError.focus();

            }

            return;

        }


        setStep(2);

        changeScreen(
            screen1,
            screen2,
            "forward"
        );

    }
);


/* =========================================================
   BACK
========================================================= */

backButton.addEventListener(
    "click",
    () => {

        setStep(1);

        changeScreen(
            screen2,
            screen1,
            "back"
        );

    }
);


/* =========================================================
   FILE UPLOAD
========================================================= */

const fileInput =
    document.getElementById(
        "fileInput"
    );

const fileList =
    document.getElementById(
        "fileList"
    );

const uploadBox =
    document.getElementById(
        "uploadBox"
    );


fileInput.addEventListener(
    "change",
    () => {

        renderFiles(
            fileInput.files
        );

    }
);


function renderFiles(files) {

    if (
        !files ||
        !files.length
    ) {

        fileList.innerHTML =
            "";

        fileList.classList.remove(
            "show"
        );

        uploadBox.classList.remove(
            "has-files"
        );

        // Xóa lỗi file
        document
            .getElementById(
                "fileError"
            )
            .classList.remove(
                "show"
            );

        return;

    }


    fileList.innerHTML =
        "";


    Array.from(files)
        .forEach(
            file => {

                const item =
                    document.createElement(
                        "div"
                    );

                item.className =
                    "file-item";


                const preview =
                    document.createElement(
                        "div"
                    );

                preview.className =
                    "file-preview";


                // Tạo preview cho ảnh/video
                if (file.type.startsWith("image/")) {
                    const img = document.createElement("img");
                    img.src = URL.createObjectURL(file);
                    img.alt = file.name;
                    preview.appendChild(img);
                } else if (file.type.startsWith("video/")) {
                    const video = document.createElement("video");
                    video.src = URL.createObjectURL(file);
                    video.muted = true;
                    video.autoplay = false;
                    video.controls = true;
                    video.style.width = "60px";
                    video.style.height = "60px";
                    video.style.objectFit = "cover";
                    video.style.borderRadius = "8px";
                    preview.appendChild(video);
                }


                const info =
                    document.createElement(
                        "div"
                    );

                info.className =
                    "file-info";


                const name =
                    document.createElement(
                        "span"
                    );

                name.className =
                    "file-name";

                name.textContent =
                    file.name;


                const size =
                    document.createElement(
                        "span"
                    );

                size.className =
                    "file-size";

                size.textContent =
                    formatSize(
                        file.size
                    );


                info.appendChild(
                    name
                );

                info.appendChild(
                    size
                );


                preview.appendChild(
                    info
                );


                const removeBtn =
                    document.createElement(
                        "button"
                    );

                removeBtn.className =
                    "file-remove";

                removeBtn.innerHTML =
                    "✕";

                removeBtn.type =
                    "button";

                removeBtn.addEventListener(
                    "click",
                    (e) => {

                        e.stopPropagation();

                        // Xóa file khỏi input
                        const dt = new DataTransfer();
                        const currentFiles = fileInput.files;
                        for (let i = 0; i < currentFiles.length; i++) {
                            if (currentFiles[i].name !== file.name) {
                                dt.items.add(currentFiles[i]);
                            }
                        }
                        fileInput.files = dt.files;
                        renderFiles(fileInput.files);
                    }
                );


                item.appendChild(
                    preview
                );

                item.appendChild(
                    removeBtn
                );

                fileList.appendChild(
                    item
                );

            }
        );


    fileList.classList.add(
        "show"
    );

    uploadBox.classList.add(
        "has-files"
    );

    // Xóa lỗi file
    document
        .getElementById(
            "fileError"
        )
        .classList.remove(
            "show"
        );

}


function formatSize(bytes) {

    if (
        bytes < 1024
    ) {

        return bytes + " B";

    }


    if (
        bytes < 1024 * 1024
    ) {

        return (
            bytes / 1024
        ).toFixed(1)
        + " KB";

    }


    return (
        bytes /
        (1024 * 1024)
    ).toFixed(1)
    + " MB";

}


/* =========================================================
   DRAG DROP
========================================================= */

[
    "dragenter",
    "dragover"
]
.forEach(
    eventName => {

        uploadBox.addEventListener(
            eventName,
            e => {

                e.preventDefault();

                uploadBox.style.borderColor =
                    "var(--blue)";

                uploadBox.style.background =
                    "rgba(0,113,227,.08)";

            }
        );

    }
);


[
    "dragleave",
    "drop"
]
.forEach(
    eventName => {

        uploadBox.addEventListener(
            eventName,
            e => {

                e.preventDefault();

                uploadBox.style.borderColor =
                    "";

                uploadBox.style.background =
                    "";

            }
        );

    }
);


uploadBox.addEventListener(
    "drop",
    e => {

        const files =
            e.dataTransfer.files;


        if (
            !files.length
        ) {

            return;

        }


        fileInput.files =
            files;


        renderFiles(
            files
        );

    }
);


/* =========================================================
   STEP 2 VALIDATION
========================================================= */

function validateStep2() {

    let valid = true;


    if (
        !udid.value.trim()
    ) {

        udid.classList.add(
            "invalid"
        );

        document
            .getElementById(
                "udidError"
            )
            .classList.add(
                "show"
            );

        valid = false;

    } else {

        udid.classList.remove(
            "invalid"
        );

        document
            .getElementById(
                "udidError"
            )
            .classList.remove(
                "show"
            );

    }


    const selectedDevice =
        document.querySelector(
            'input[name="device"]:checked'
        );


    if (
        !selectedDevice
    ) {

        document
            .getElementById(
                "deviceError"
            )
            .classList.add(
                "show"
            );

        valid = false;

    } else {

        document
            .getElementById(
                "deviceError"
            )
            .classList.remove(
                "show"
            );

    }


    const selectedIssue =
        document.querySelector(
            'input[name="issue"]:checked'
        );


    if (
        !selectedIssue
    ) {

        document
            .getElementById(
                "issueError"
            )
            .classList.add(
                "show"
            );

        valid = false;

    } else {

        document
            .getElementById(
                "issueError"
            )
            .classList.remove(
                "show"
            );

    }


    // Validate description
    if (
        !description.value.trim()
    ) {

        description.classList.add(
            "invalid"
        );

        document
            .getElementById(
                "descriptionError"
            )
            .classList.add(
                "show"
            );

        valid = false;

    } else {

        description.classList.remove(
            "invalid"
        );

        document
            .getElementById(
                "descriptionError"
            )
            .classList.remove(
                "show"
            );

    }


    // Validate file upload
    if (
        !fileInput.files ||
        fileInput.files.length === 0
    ) {

        document
            .getElementById(
                "fileError"
            )
            .classList.add(
                "show"
            );

        valid = false;

    } else {

        document
            .getElementById(
                "fileError"
            )
            .classList.remove(
                "show"
            );

    }


    return valid;

}


/* =========================================================
   LIVE VALIDATION
========================================================= */

udid.addEventListener(
    "input",
    () => {

        if (
            udid.value.trim()
        ) {

            udid.classList.remove(
                "invalid"
            );

            document
                .getElementById(
                    "udidError"
                )
                .classList.remove(
                    "show"
                );

        }

    }
);


description.addEventListener(
    "input",
    () => {

        if (
            description.value.trim()
        ) {

            description.classList.remove(
                "invalid"
            );

            document
                .getElementById(
                    "descriptionError"
                )
                .classList.remove(
                    "show"
                );

        }

    }
);


document
    .querySelectorAll(
        'input[name="device"]'
    )
    .forEach(
        input => {

            input.addEventListener(
                "change",
                () => {

                    document
                        .getElementById(
                            "deviceError"
                        )
                        .classList.remove(
                            "show"
                        );

                }
            );

        }
    );


document
    .querySelectorAll(
        'input[name="issue"]'
    )
    .forEach(
        input => {

            input.addEventListener(
                "change",
                () => {

                    document
                        .getElementById(
                            "issueError"
                        )
                        .classList.remove(
                            "show"
                        );

                }
            );

        }
    );


/* =========================================================
   SUBMIT
========================================================= */

submitButton.addEventListener(
    "click",
    async () => {

        if (
            !validateStep2()
        ) {

            const firstError =
                document.querySelector(
                    ".invalid, .error.show"
                );


            if (
                firstError
            ) {

                firstError.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "center"

                });

            }

            return;

        }


        // Hiện loading
        loadingOverlay.classList.add(
            "show"
        );


        // Lấy dữ liệu từ form
        const selectedDevice =
            document.querySelector(
                'input[name="device"]:checked'
            );


        const selectedIssue =
            document.querySelector(
                'input[name="issue"]:checked'
            );


        const data = {
            username: username.value.trim(),
            telegram: telegram.value.trim(),
            orderId: orderId.value.trim(),
            udid: udid.value.trim(),
            device: selectedDevice ? selectedDevice.value : "—",
            issue: selectedIssue ? selectedIssue.dataset.label : "—",
            description: description.value.trim()
        };
        
        // Lấy danh sách file
        const files = fileInput.files;
        const fileArray = files && files.length > 0 ? Array.from(files) : [];


        // Gửi thông báo qua Telegram
        const result = await sendToTelegram(data, fileArray);


        // Cập nhật UI sau khi gửi
        setTimeout(
            () => {

                loadingOverlay.classList.remove(
                    "show"
                );
                
                // Hiển thị kết quả
                if (result.success) {
                    // Cập nhật thông tin hiển thị
                    document
                        .getElementById(
                            "resultUsername"
                        )
                        .textContent =
                            data.username;


                    document
                        .getElementById(
                            "resultUdid"
                        )
                        .textContent =
                            data.udid;


                    document
                        .getElementById(
                            "resultDevice"
                        )
                        .textContent =
                            data.device;


                    document
                        .getElementById(
                            "resultReason"
                        )
                        .textContent =
                            data.issue;


                    if (
                        data.orderId
                    ) {

                        document
                            .getElementById(
                                "resultOrder"
                            )
                            .textContent =
                                data.orderId;

                        document
                            .getElementById(
                                "resultOrderRow"
                            )
                            .style.display =
                                "";

                    } else {

                        document
                            .getElementById(
                                "resultOrderRow"
                            )
                            .style.display =
                                "none";

                    }


                    if (
                        data.telegram
                    ) {

                        const tgDisplay = data.telegram.startsWith('@') ? data.telegram : `@${data.telegram}`;
                        document
                            .getElementById(
                                "resultTelegram"
                            )
                            .textContent =
                                tgDisplay;

                        document
                            .getElementById(
                                "resultTelegramRow"
                            )
                            .style.display =
                                "";

                    } else {

                        document
                            .getElementById(
                                "resultTelegramRow"
                            )
                            .style.display =
                                "none";

                    }


                    setStep(3);

                    changeScreen(
                        screen2,
                        screen3,
                        "forward"
                    );
                } else {
                    // Hiển thị lỗi nếu gửi thất bại
                    alert("❌ Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại sau.\n\n" + result.error);
                }

            },
            500
        );

    }
);


/* =========================================================
   NEW REQUEST
========================================================= */

newRequestButton.addEventListener(
    "click",
    () => {


        username.value =
            "";

        telegram.value =
            "";

        orderId.value =
            "";

        udid.value =
            "";

        description.value =
            "";


        document
            .querySelectorAll(
                'input[type="radio"]'
            )
            .forEach(
                input => {

                    input.checked =
                        false;

                }
            );


        fileInput.value =
            "";

        fileList.innerHTML =
            "";

        fileList.classList.remove(
            "show"
        );

        uploadBox.classList.remove(
            "has-files"
        );


        telegramField.classList.remove(
            "show"
        );


        telegramChevron.style.transform =
            "rotate(0deg)";


        document
            .querySelectorAll(
                ".invalid"
            )
            .forEach(
                element => {

                    element.classList.remove(
                        "invalid"
                    );

                }
            );


        document
            .querySelectorAll(
                ".error.show"
            )
            .forEach(
                element => {

                    element.classList.remove(
                        "show"
                    );

                }
            );


        setStep(1);


        changeScreen(
            screen3,
            screen1,
            "back"
        );

    }
);


/* =========================================================
   INIT
========================================================= */

setStep(1);
